// Small drawn-in-code sketches of what each product does. Illustrative only: no real data or metrics.
// Each one is still at rest and plays a short motion on card hover/focus (see .sketch-* in portfolio.css).

function PageMindSketch() {
  return (
    <div className="sketch sketch-chat">
      <div className="doc">
        <p className="doc-name">handbook.pdf</p>
        <i /><i /><i className="doc-hit" /><i /><i />
        <span className="doc-page">p.4</span>
      </div>
      <div className="chat">
        <div className="msg msg-user">
          <span className="avatar avatar-user">
            <svg viewBox="0 0 16 16"><circle cx="8" cy="5.5" r="2.75" /><path d="M2.5 14c.8-2.8 3-4.2 5.5-4.2s4.7 1.4 5.5 4.2" /></svg>
          </span>
          <p>What does section 3 cover?</p>
        </div>
        <div className="msg msg-ai">
          <span className="avatar avatar-ai">
            <svg viewBox="0 0 16 16"><path d="M8 1.5 9.6 6.4 14.5 8l-4.9 1.6L8 14.5 6.4 9.6 1.5 8l4.9-1.6Z" /></svg>
          </span>
          <p>Onboarding steps and access rules <span className="chat-cite">p.4</span></p>
        </div>
      </div>
    </div>
  );
}

function ServerusSketch() {
  return (
    <div className="sketch sketch-log">
      <p className="log-row">
        <b>PUT</b><span className="log-path">/objects/talk.mp4</span>
        <span className="log-upload"><i /></span>
        <span className="log-parts"><span className="parts-now">part 3/5</span><span className="parts-done">5/5 done</span></span>
      </p>
      <p className="log-row">
        <b>GET</b><span className="log-path">/objects/cover.jpg</span>
        <span className="log-tag log-hit">HIT redis</span>
      </p>
      <p className="log-row">
        <b>GET</b><span className="log-path">/objects/clip.mp4</span>
        <span className="log-tag log-miss">MISS → s3</span>
      </p>
    </div>
  );
}

function QueryIOSketch() {
  return (
    <div className="sketch sketch-sql">
      <p className="sql-line">
        <b>SELECT</b> name <b>FROM</b> users <b>WHERE</b> id = $1
      </p>
      <ul className="sql-tree">
        <li>select</li>
        <li>├ columns: name</li>
        <li>├ from: users</li>
        <li>└ where: id = $1</li>
      </ul>
      <p className="sql-ok">
        <svg viewBox="0 0 16 16"><path d="M3 8.5 6.5 12 13 4.5" /></svg>
        validated
      </p>
    </div>
  );
}

function PaperrowSketch() {
  return (
    <div className="sketch sketch-sheet">
      <div className="sheet-grid">
        {["file", "vendor", "total"].map((h) => <span className="sheet-head" key={h}>{h}</span>)}
        {Array.from({ length: 9 }, (_, i) => <span className="sheet-cell" key={i} style={{ "--i": i } as React.CSSProperties}><i /></span>)}
      </div>
    </div>
  );
}

function HorsesSketch() {
  return (
    <div className="sketch sketch-horses">
      <p className="prize">
        <svg viewBox="0 0 16 16"><path d="M4.5 2h7v3.5a3.5 3.5 0 0 1-7 0Z" /><path d="M4.5 3.5H2.5a2 2 0 0 0 2 2.5M11.5 3.5h2a2 2 0 0 1-2 2.5M8 9v3M5.5 14h5" /></svg>
        1st prize · yuHacks 2022
      </p>
      <div className="match">
        <span className="match-avatar" />
        <div className="match-text">
          <b>Rescue near you</b>
          <span>Adopter match · 2 new messages</span>
        </div>
        <span className="match-chip">Matched</span>
      </div>
    </div>
  );
}

function V2Sketch() {
  return (
    <div className="sketch sketch-shot">
      <img src="/static/Images/v2.png" alt="" loading="lazy" />
    </div>
  );
}

export const sketches: Record<string, () => JSX.Element> = {
  PageMind: PageMindSketch,
  Serverus: ServerusSketch,
  QueryIO: QueryIOSketch,
  Paperrow: PaperrowSketch,
  "For The Horses": HorsesSketch,
  "v2.aradhya": V2Sketch,
};
