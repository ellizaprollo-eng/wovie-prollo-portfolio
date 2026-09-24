import { useState } from 'react'
import { contactForm, links, services } from '@/data/site'
import { SectionHeading } from './SectionHeading'
import { LinkedInIcon, MailIcon } from './Icons'

type Status = 'idle' | 'sending' | 'sent' | 'mailto' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>

    // No backend configured: hand the message to the visitor's email app.
    if (!contactForm.endpoint) {
      const subject = `Project inquiry: ${data.service}`
      const body = `Name: ${data.name}\nEmail: ${data.email}\nService: ${data.service}\n\n${data.message}`
      window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setStatus('mailto')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(contactForm.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="container-x py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Prefer to write first?"
            intro="Tell me what you are working on and which part feels manual. I will reply by email."
          />
          <ul className="mt-8 space-y-3 text-sm">
            <li>
              <a href={`mailto:${links.email}`} className="inline-flex items-center gap-3 text-ink hover:text-signal-deep">
                <MailIcon className="h-4 w-4" />
                {links.email}
              </a>
            </li>
            <li>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-ink hover:text-signal-deep"
              >
                <LinkedInIcon className="h-4 w-4" />
                Connect on LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="grid gap-5 rounded-xl border border-line bg-card p-6 md:p-8 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium">
            Name
            <input name="name" required autoComplete="name" className="field font-normal" placeholder="Your name" />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Email
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className="field font-normal"
              placeholder="you@company.com"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium sm:col-span-2">
            Service needed
            <select name="service" required defaultValue="" className="field font-normal">
              <option value="" disabled>
                Choose a service
              </option>
              {services.map((s) => (
                <option key={s.title}>{s.title}</option>
              ))}
              <option>Not sure yet</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium sm:col-span-2">
            Message
            <textarea
              name="message"
              required
              rows={5}
              className="field resize-y font-normal"
              placeholder="What tools do you use today, and what would you like to automate?"
            />
          </label>
          <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              <span className="btn-node" />
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
            <p role="status" className="text-sm text-muted">
              {status === 'sent' && 'Thanks, your message was sent. I will reply by email.'}
              {status === 'mailto' && 'Your email app should open with the message ready to send.'}
              {status === 'error' && `Something went wrong. Please email ${links.email} directly.`}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
