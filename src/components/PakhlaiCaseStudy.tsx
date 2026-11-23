import type { MouseEvent } from 'react'
import { Check, CircleCheck, Database, MonitorSmartphone, Radio, Server, X } from 'lucide-react'
import { pakhlaiCaseStudy as study } from '../content/site-content'
import './PakhlaiCaseStudy.css'

const architectureIcons = [MonitorSmartphone, Server, Database]

function closeCaseStudy(event: MouseEvent<HTMLButtonElement>) {
  const details = event.currentTarget.closest('details')
  if (!details) return
  details.open = false
  details.querySelector('summary')?.focus({ preventScroll: true })
  details.scrollIntoView({ block: 'start' })
}

export default function PakhlaiCaseStudy() {
  return <section aria-labelledby="pakhlai-case-study-title" className="case-study">
    <header className="case-study__header">
      <div className="case-study__masthead">
        <p className="case-study__eyebrow">{study.eyebrow}</p>
        <span className="case-study__category">{study.category}</span>
      </div>
      <h4 id="pakhlai-case-study-title" className="case-study__title">
        {study.title} <span>{study.titleAccent}</span>
      </h4>
      <p className="case-study__intro">{study.intro}</p>
    </header>

    <dl className="case-study__facts">
      {study.facts.map((fact) => <div key={fact.label} className="case-study__fact">
        <dt>{fact.label}</dt>
        <dd>{fact.value}</dd>
      </div>)}
    </dl>

    <div className="case-study__body">
      <div className="case-study__story">
        <section aria-labelledby="pakhlai-problem-heading" className="case-study__section">
          <h5 id="pakhlai-problem-heading">{study.problem.heading}</h5>
          <p>{study.problem.body}</p>
        </section>

        <section aria-labelledby="pakhlai-contribution-heading" className="case-study__section">
          <h5 id="pakhlai-contribution-heading">{study.contribution.heading}</h5>
          <ul className="case-study__contributions">
            {study.contribution.items.map((item) => <li key={item}>
              <Check aria-hidden="true" size={18} />
              <span>{item}</span>
            </li>)}
          </ul>
        </section>

        <section aria-labelledby="pakhlai-challenge-heading" className="case-study__note">
          <h5 id="pakhlai-challenge-heading">{study.challenge.heading}</h5>
          <p>{study.challenge.body}</p>
        </section>
      </div>

      <div className="case-study__engineering">
        <section aria-labelledby="pakhlai-architecture-heading">
          <div className="case-study__section-heading">
            <h5 id="pakhlai-architecture-heading">{study.architecture.heading}</h5>
            <span className="case-study__category">{study.architecture.label}</span>
          </div>
          <div className="case-study__system">
            <ol className="case-study__layers" aria-label="Pakhlai application layers">
              {study.architecture.layers.map((layer, index) => {
                const Icon = architectureIcons[index]
                return <li key={layer.label}>
                  <span className="case-study__node"><Icon aria-hidden="true" size={20} /></span>
                  <span className="case-study__layer-label">{layer.label}</span>
                  <span className="case-study__technology">{layer.technology}</span>
                </li>
              })}
            </ol>
            <div className="case-study__realtime">
              <Radio aria-hidden="true" size={20} />
              <div>
                <p>{study.architecture.realtimeTitle}</p>
                <p>{study.architecture.realtimeTechnology}</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="pakhlai-decisions-heading" className="case-study__decisions">
          <h5 id="pakhlai-decisions-heading">{study.engineering.heading}</h5>
          <dl>
            {study.engineering.decisions.map((decision) => <div key={decision.title}>
              <dt>{decision.title}</dt>
              <dd>{decision.body}</dd>
            </div>)}
          </dl>
        </section>
      </div>
    </div>

    <footer className="case-study__outcome" aria-labelledby="pakhlai-result-heading">
      <span className="case-study__outcome-icon"><CircleCheck aria-hidden="true" size={22} /></span>
      <div>
        <p className="case-study__eyebrow">{study.result.label}</p>
        <h5 id="pakhlai-result-heading">{study.result.heading}</h5>
        <p className="case-study__outcome-copy">{study.result.body}</p>
      </div>
      <button type="button" onClick={closeCaseStudy} className="case-study__close">
        <X aria-hidden="true" size={16} />
        {study.result.closeLabel}
      </button>
    </footer>
  </section>
}
