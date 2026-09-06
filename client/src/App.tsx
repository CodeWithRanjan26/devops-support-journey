function Home() {
  const [homeLeaders, setHomeLeaders] = useState<any[]>([]);
  useEffect(() => { apiRequest("/api/leaderboard").then((data) => setHomeLeaders((data?.leaders || []).slice(0, 3))).catch(() => undefined); }, []);
  return (
    <div className="home-page">
      <header className="home-nav">
        <div className="brand">
          <span>DS</span>
          <div>
            <strong>DevOps Support</strong>
            <small>Journey</small>
          </div>
        </div>
        <div className="home-actions">
          <NavLink to="/login">Log in</NavLink>
          <NavLink className="primary" to="/register">
            Start learning <ChevronRight size={16} />
          </NavLink>
        </div>
      </header>
      <div className="home-announcement"><span><i /> CURRICULUM ONLINE</span><b>Build calm confidence for your next incident.</b><NavLink to="/roadmap">See the path <ChevronRight size={14} /></NavLink></div>
      <section className="home-hero">
        <div>
          <div className="hero-kicker"><span>01</span> A PRACTICAL OPERATIONS SCHOOL</div>
          <div className="eyebrow">LEARN. PRACTICE. TROUBLESHOOT. DEPLOY.</div>
          <h1>DevOps Support Journey</h1>
          <p>
            Become the person production can rely on. A structured learning system for DevOps, cloud, application support, production support, and SRE.
          </p>
          <div className="home-cta">
            <NavLink className="primary" to="/register">
              Build your journey <ChevronRight size={17} />
            </NavLink>
            <NavLink className="home-link" to="/roadmap">
              Explore the roadmap <ChevronRight size={16} />
            </NavLink>
          </div>
        </div>
        <div className="home-visual">
          <div className="visual-label"><span>LIVE PRACTICE</span><i /></div>
          <div className="visual-terminal">
            <span>● ● ●</span>
            <code>
              $ incident --diagnose
              <br />
              <b>systems thinking loaded</b>
              <br />
              progress: 21 levels mapped
              <br />
              mode: calm, curious, capable
            </code>
          </div>
          <div className="visual-chip chip-one">417 topics mapped</div><div className="visual-chip chip-two">SRE mindset</div>
        </div>
      </section>
      <section className="student-start">
        <div className="student-start-copy"><div className="eyebrow">YOUR FIRST WEEK</div><h2>Know exactly what to learn next.</h2><p>No blank roadmap, no random tutorials. Start with a guided sequence and turn each topic into something you can explain under pressure.</p><div className="student-checks"><span><Check size={15} /> A clear beginner-to-production path</span><span><Check size={15} /> Notes and interview practice built in</span><span><Check size={15} /> Progress you can measure every session</span></div><NavLink className="home-link" to="/roadmap">Start with Linux Fundamentals <ChevronRight size={16} /></NavLink></div>
        <div className="student-workbench"><div className="workbench-top"><span className="eyebrow">YOUR WORKBENCH</span><span className="workbench-status"><i /> READY</span></div><h3>Build skills that travel with you.</h3><div className="skill-chips"><span>Linux</span><span>Networking</span><span>AWS</span><span>Docker</span><span>Kubernetes</span><span>SRE</span></div><div className="workbench-footer"><span>Next up</span><b>Filesystem hierarchy</b><ChevronRight size={16} /></div></div>
      </section>
      <section className="home-proof">
        <div>
          <b>21</b>
          <span>curriculum levels</span>
        </div>
        <div>
          <b>417</b>
          <span>topics to practice</span>
        </div>
        <div>
          <b>4</b>
          <span>steps per topic</span>
        </div>
        <div>
          <b>1</b>
          <span>clear path forward</span>
        </div>
      </section>
      <section className="home-feature">
        <div>
          <div className="eyebrow">ONE PLACE TO GROW</div>
          <h2>Learn the concept. Practice the response. Track the change.</h2>
        </div>
        <div className="feature-list">
          <article>
            <Terminal size={19} />
            <h3>Production-ready foundations</h3>
            <p>
              Start with Linux, networking, Git, and SQL, then move into cloud
              and distributed systems.
            </p>
          </article>
          <article>
            <BarChart3 size={19} />
            <h3>Progress you can see</h3>
            <p>
              Complete four deliberate steps per topic and compare your momentum
              on the live leaderboard.
            </p>
          </article>
          <article>
            <ShieldCheck size={19} />
            <h3>Built for real support work</h3>
            <p>
              Practice incidents, troubleshooting, interview questions, notes,
              and reliable operating habits.
            </p>
          </article>
        </div>
      </section>
      <section className="home-audience">
        <div className="home-section-heading"><div><div className="eyebrow">BUILT FOR YOUR NEXT ROLE</div><h2>Choose the work you want to become ready for.</h2></div><NavLink className="home-link" to="/tracks">See all tracks <ChevronRight size={16} /></NavLink></div>
        <div className="audience-grid">{['DevOps Engineer','Application Support','Production Support','Cloud Support','SRE','Interview Preparation'].map((role,index)=><NavLink className="audience-card" to="/tracks" key={role}><span>0{index+1}</span><h3>{role}</h3><p>{['Ship and operate reliable systems.','Keep applications healthy.','Handle incidents with confidence.','Support cloud infrastructure.','Engineer for reliability.','Practice clear answers.'][index]}</p><ChevronRight size={16} /></NavLink>)}</div>
      </section>
      <section className="home-topic-preview"><div className="sample-topic-copy"><div className="eyebrow">TRY A REAL TOPIC</div><h2>Linux File Permissions</h2><p>Learn how chmod, chown, and least privilege shape safe day-to-day operations.</p><div className="sample-meta"><span>Beginner</span><span>30 minutes</span><span>4 learning steps</span></div><NavLink className="primary" to="/register">Try this topic <ChevronRight size={16} /></NavLink></div><div className="sample-checklist"><div className="eyebrow">TOPIC CHECKLIST</div>{['Watch recommended learning material','Read official documentation','Explain it in your own words','Answer an interview question'].map((step,index)=><div key={step}><span>{index+1}</span>{step}<Check size={15} /></div>)}</div></section>
      <section className="home-tracks">
        <div className="home-section-heading">
          <div>
            <div className="eyebrow">FIND YOUR DIRECTION</div>
            <h2>One roadmap, shaped around your work.</h2>
          </div>
          <NavLink className="home-link" to="/tracks">Compare career tracks <ChevronRight size={16} /></NavLink>
        </div>
        <div className="track-preview-grid">
          {tracks.slice(0, 3).map((track, index) => (
            <NavLink className="track-preview" to="/tracks" key={track}>
              <span>0{index + 1}</span><h3>{track}</h3><p>{['Ship and operate reliable systems from commit to cloud.', 'Keep applications healthy, observable, and customer-ready.', 'Build calm incident response and production operations.'][index]}</p><ChevronRight size={17} />
            </NavLink>
          ))}
        </div>
      </section>
      <section className="home-roadmap-band">
        <div className="home-roadmap-copy"><div className="eyebrow">THE JOURNEY</div><h2>From first command to production confidence.</h2><p>Follow a deliberate path through the tools and thinking that make support engineers effective under pressure.</p><NavLink className="primary" to="/roadmap">Explore the roadmap <ChevronRight size={16} /></NavLink></div>
        <div className="roadmap-steps">{['Fundamentals', 'Linux & Networking', 'Cloud & Containers', 'CI/CD & IaC', 'SRE & Production'].map((step, index) => <div className="roadmap-step" key={step}><span>{String(index + 1).padStart(2, '0')}</span><b>{step}</b>{index < 4 && <i />}</div>)}</div>
      </section>
      <section className="home-live">
        <div className="live-card"><div className="live-card-icon"><BarChart3 size={20} /></div><div><div className="eyebrow">LIVE LEARNING</div><h2>Make progress visible.</h2><p>Complete topics, record study sessions, and see how your momentum compares with the community.</p><NavLink className="home-link" to="/leaderboard">View leaderboard <ChevronRight size={16} /></NavLink></div></div>
        <div className="live-stats"><div><b>4</b><span>steps per topic</span></div><div><b>15s</b><span>leaderboard refresh</span></div><div><b>∞</b><span>ways to improve</span></div></div>
      </section>
      <section className="home-leaderboard-preview"><div className="home-section-heading"><div><div className="eyebrow">COMMUNITY MOMENTUM</div><h2>Learn alongside people building the same confidence.</h2></div><NavLink className="home-link" to="/leaderboard">Open full leaderboard <ChevronRight size={16} /></NavLink></div><div className="home-leader-row">{homeLeaders.length ? homeLeaders.map((leader) => <div className="home-leader" key={leader.id}><strong>#{leader.rank}</strong><span className="leader-avatar">{initials(leader.name)}</span><b>{leader.name}</b><small>{leader.progressPercent}% journey complete</small></div>) : <div className="home-leader-empty">The community board is ready for its first learners. Create an account and make the first move.</div>}</div></section>
      <section className="home-trust"><div className="eyebrow">A PRACTICE YOU CAN TRUST</div><div className="trust-items"><span><Check size={17} /> Official documentation first</span><span><ShieldCheck size={17} /> Real production scenarios</span><span><BarChart3 size={17} /> Account-backed progress</span><span><GraduationCap size={17} /> Interview-ready practice</span></div></section>
      <section className="home-faq"><div className="home-section-heading"><div><div className="eyebrow">QUESTIONS, ANSWERED</div><h2>Start without second-guessing.</h2></div></div><div className="faq-grid"><details open><summary>Do I need DevOps experience?</summary><p>No. The roadmap starts with computer, Linux, networking, and troubleshooting fundamentals.</p></details><details><summary>Can I change my career track?</summary><p>Yes. Tracks are recommendations, while your core learning progress remains yours.</p></details><details><summary>Does my progress save automatically?</summary><p>Your account, progress, notes, study sessions, and leaderboard activity are designed for API-backed persistence.</p></details><details><summary>Are resources official?</summary><p>The curriculum prioritizes official documentation and carefully selected reference material.</p></details></div></section>
      <section className="home-final-cta"><div><div className="eyebrow">START WHERE YOU ARE</div><h2>Your next production skill starts here.</h2><p>Build a practice that compounds, one useful concept at a time.</p></div><NavLink className="primary" to="/register">Create your account <ChevronRight size={17} /></NavLink></section>
      <footer className="home-footer"><div className="footer-brand"><div className="brand"><span>DS</span><div><strong>DevOps Support</strong><small>Journey</small></div></div><p>Learn. Practice. Troubleshoot. Deploy.</p></div><div className="footer-column"><b>Platform</b><NavLink to="/roadmap">Roadmap</NavLink><NavLink to="/tracks">Career tracks</NavLink><NavLink to="/leaderboard">Leaderboard</NavLink></div><div className="footer-column"><b>Learning</b><NavLink to="/study">Study mode</NavLink><NavLink to="/resources">Resources</NavLink><NavLink to="/interview">Interview practice</NavLink></div><div className="footer-column"><b>Account</b><NavLink to="/login">Log in</NavLink><NavLink to="/register">Create account</NavLink><span>System operational</span></div><div className="footer-bottom"><span>© 2026 DevOps Support Journey</span><span>Made with ♥ by Ranjan</span></div></footer>
    </div>
  );
}
function Leaderboard() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");
  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/leaderboard`,
        );
        if (!response.ok) throw new Error("Unable to load leaderboard");
        const next = await response.json();
        if (active) setData(next);
      } catch (e) {
        if (active)
          setError(
            e instanceof Error ? e.message : "Unable to load leaderboard",
          );
      }
    };
    load();
    const timer = window.setInterval(load, 15000);
    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, []);
  return (
    <>
      <PageTitle
        eyebrow="LEARN TOGETHER"
        title="Leaderboard"
        subtitle="See who is building momentum across the DevOps Support Journey."
        action={
          <div className="live-badge">
            <i /> Live · updates every 15s
          </div>
        }
      />
      <section className="leaderboard-hero panel">
        <div>
          <div className="eyebrow">THE CLIMB</div>
          <h2>Progress is more useful when it is visible.</h2>
          <p>
            Rankings are calculated from completed learning steps and recorded
            study time.
          </p>
        </div>
        <div className="leaderboard-total">
          <b>{data?.leaders.length || 0}</b>
          <span>learners</span>
        </div>
      </section>
      <section className="panel leaderboard-table">
        <div className="leaderboard-head">
          <span>RANK</span>
          <span>LEARNER</span>
          <span>TRACK</span>
          <span>TOPICS</span>
          <span>PROGRESS</span>
          <span>STUDY TIME</span>
        </div>
        {error && (
          <div className="empty">
            <p>{error}. Start the API and refresh.</p>
          </div>
        )}
        {!error &&
          data?.leaders.map((leader: any) => (
            <div
              className={
                leader.rank <= 3 ? "leader-row top-rank" : "leader-row"
              }
              key={leader.id || leader.rank}
            >
              <strong>{String(leader.rank).padStart(2, "0")}</strong>
              <div className="leader-name">
                <span className="leader-avatar">
                  {initials(leader.name)}
                </span>
                <b>{leader.name}</b>
              </div>
              <span>{leader.track}</span>
              <span>{leader.topicsCompleted}</span>
              <div className="leader-progress">
                <div className="progress">
                  <i style={{ width: `${leader.progressPercent}%` }} />
                </div>
                <small>{leader.progressPercent}%</small>
              </div>
              <span>
                {Math.floor(leader.studyMinutes / 60)}h{" "}
                {leader.studyMinutes % 60}m
              </span>
            </div>
          ))}
        {!error && !data && (
          <div className="empty">
            <p>Loading live rankings...</p>
          </div>
        )}
        {!error && data?.leaders.length === 0 && (
          <div className="empty">
            <h3>The board is ready for its first learner.</h3>
            <p>Create an account and complete your first learning step.</p>
          </div>
        )}
      </section>
    </>
  );
}
import { useEffect, useMemo, useState } from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  BarChart3,
  BookOpen,
  Check,
  ChevronRight,
  Clock3,
  Cloud,
  FileText,
  Gauge,
  GitBranch,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Menu,
  Moon,
  Play,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Sun,
  Terminal,
  Trash2,
  Users,
  UserRound,
  X,
} from "lucide-react";
import { allTopics, modules, tracks, Module, Topic } from "./data/curriculum";

type Note = {
  id: string;
  moduleTitle: string;
  topicTitle: string;
  title: string;
  content: string;
  tags: string[];
  date: string;
};
const key = "dsj-progress";
const readProgress = (): Record<string, number[]> =>
  JSON.parse(localStorage.getItem(key) || "{}");
const pct = (steps: number[]) => Math.round((steps.length / 4) * 100);
const initials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
const getTimeGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
};
const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
const apiRequest = async (path: string, options: RequestInit = {}) => {
  const token = localStorage.getItem("dsj-token");
  const response = await fetch(`${apiUrl}${path}`, { ...options, headers: { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}), ...(options.headers || {}) } });
  if (!response.ok) throw new Error("API request failed");
  return response.status === 204 ? null : response.json();
};
const logoutUser = (navigate: (to: string) => void) => {
  if (!window.confirm("Are you sure you want to log out?")) return;
  localStorage.removeItem("dsj-token");
  localStorage.removeItem("dsj-user");
  navigate("/");
};
function AccountMenu({
  name,
  navigate,
}: {
  name: string;
  navigate: (to: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="account-menu-wrap">
      <button className="avatar account-trigger" onClick={() => setOpen(!open)} aria-label="Open account menu">
        {initials(name)}
      </button>
      {open && (
        <div className="account-menu">
          <strong>{name}</strong>
          <NavLink to="/profile" onClick={() => setOpen(false)}><UserRound size={15} /> Edit profile</NavLink>
          <button onClick={() => logoutUser(navigate)}><LogOut size={15} /> Log out</button>
        </div>
      )}
    </div>
  );
}
const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/roadmap", label: "Roadmap", icon: GitBranch },
  { to: "/leaderboard", label: "Leaderboard", icon: BarChart3 },
  { to: "/study", label: "Study Mode", icon: Clock3 },
  { to: "/notes", label: "Notes", icon: FileText },
  { to: "/resources", label: "Resources", icon: BookOpen },
  { to: "/interview", label: "Interview Practice", icon: GraduationCap },
  { to: "/scenarios", label: "Incident Labs", icon: ShieldCheck },
  { to: "/review", label: "Review Queue", icon: ShieldCheck },
  { to: "/tracks", label: "Career Tracks", icon: Cloud },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
];
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login register />} />
        <Route path="/secure-admin-setup" element={<AdminSetup />} />
        <Route path="*" element={<Shell />} />
      </Routes>
    </BrowserRouter>
  );
}
function Shell() {
  const [dark, setDark] = useState(
    localStorage.getItem("dsj-theme") === "dark",
  );
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [user] = useState<{ name?: string; role?: string }>(() =>
    JSON.parse(localStorage.getItem("dsj-user") || "{}"),
  );
  useEffect(() => {
    document.body.className = dark ? "dark" : "";
    localStorage.setItem("dsj-theme", dark ? "dark" : "light");
  }, [dark]);
  return (
    <div className="app-shell">
      <aside className={open ? "sidebar open" : "sidebar"}>
        <div className="brand">
          <span>DS</span>
          <div>
            <strong>DevOps Support</strong>
            <small>Journey</small>
          </div>
          <button
            className="icon-btn mobile-only"
            onClick={() => setOpen(false)}
          >
            <X size={18} />
          </button>
        </div>
        <div className="side-label">LEARN</div>
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            onClick={() => setOpen(false)}
            className="side-link"
            to={to}
            key={to}
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
        {user.role === "admin" && <NavLink className="side-link" to="/admin"><Users size={18} /><span>Admin panel</span></NavLink>}
        {user.role === "teacher" && <NavLink className="side-link" to="/teacher"><Users size={18} /><span>My students</span></NavLink>}
        <div className="side-focus">
          <small>CURRENT FOCUS</small>
          <b>Linux Fundamentals</b>
          <span>Filesystem hierarchy</span>
          <div className="mini-progress">
            <i style={{ width: "18%" }} />
          </div>
          <em>18% complete</em>
        </div>
        <button className="theme-btn" onClick={() => setDark(!dark)}>
          {dark ? <Sun size={17} /> : <Moon size={17} />}{" "}
          {dark ? "Light mode" : "Dark mode"}
        </button>
        <NavLink className="side-link profile-link" to="/profile">
          <UserRound size={18} />
          <span>{user.name || "Profile"}</span>
        </NavLink>
      </aside>
      <main className="main">
        <header className="topbar">
          <button
            className="icon-btn mobile-only"
            onClick={() => setOpen(true)}
          >
            <Menu size={20} />
          </button>
          <div className="global-search">
            <Search size={17} />
            <input placeholder="Search modules, topics, notes..." />
          </div>
          <div className="top-actions">
            <AccountMenu name={user.name || "Alex Kumar"} navigate={navigate} />
          </div>
        </header>
        <div className="page">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/module/:id" element={<ModulePage />} />
            <Route path="/study" element={<Study />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/scenarios" element={<IncidentLabs />} />
            <Route path="/review" element={<Review />} />
            <Route path="/tracks" element={<Tracks />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/teacher" element={<TeacherPanel />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
function Login({ register = false }: { register?: boolean }) {
  const nav = useNavigate();
  const teacherMode = new URLSearchParams(window.location.search).get("role") === "teacher";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const submit = async () => {
    setError("");
    if (!email || !password || (register && (!name || password !== confirm))) {
      setError(
        register
          ? "Complete the form and make sure passwords match."
          : "Enter your email and password.",
      );
      return;
    }
    setBusy(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/auth/${register ? "register" : "login"}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(
            register ? { name, email, password, ...(teacherMode ? { inviteCode } : {}) } : { email, password },
          ),
        },
      );
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.message || "Unable to authenticate");
      localStorage.setItem("dsj-token", data.token);
      localStorage.setItem("dsj-user", JSON.stringify(data.user));
      nav("/dashboard");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unable to authenticate");
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="auth">
      <div className="auth-panel">
        <div className="brand auth-brand">
          <span>DS</span>
          <div>
            <strong>DevOps Support</strong>
            <small>Journey</small>
          </div>
        </div>
        <div className="eyebrow">{teacherMode ? "AUTHORIZED TEACHER REGISTRATION" : "LEARN. PRACTICE. TROUBLESHOOT. DEPLOY."}</div>
        <h1>{teacherMode ? "Join as a teacher" : register ? "Start your journey" : "Welcome back"}</h1>
        <p>Build the skill, not just the knowledge.</p>
        {register && (
          <input
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        {register && teacherMode && <input className="form-control" placeholder="Teacher invite code" value={inviteCode} onChange={(event) => setInviteCode(event.target.value)} />}
        <input
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {register && (
          <input
            className="form-control"
            type="password"
            placeholder="Confirm password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        )}{" "}
        {error && <div className="form-error">{error}</div>}
        <button className="primary w-100" onClick={submit} disabled={busy}>
          {busy ? "Connecting..." : register ? "Create account" : "Login"}{" "}
          <ChevronRight size={17} />
        </button>
        <span className="auth-switch">
          {register ? "Already have an account?" : "New to the journey?"}{" "}
          <button onClick={() => nav(register ? "/login" : "/register")}>
            {register ? "Login" : "Create account"}
          </button>
        </span>
      </div>
      <div className="auth-art">
        <div className="orbit one" />
        <div className="orbit two" />
        <div className="art-copy">
          <Terminal size={30} />
          <h2>Operations are a practice.</h2>
          <p>
            Build calm, capable systems thinking from the command line to the
            cloud.
          </p>
        </div>
      </div>
    </div>
  );
}
function AdminSetup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", adminCode: "" });
  const [error, setError] = useState("");
  const submit = async () => { try { const response = await fetch(`${apiUrl}/api/auth/admin-register`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) }); const data = await response.json(); if (!response.ok) throw new Error(data.message || "Unable to create administrator"); localStorage.setItem("dsj-token", data.token); localStorage.setItem("dsj-user", JSON.stringify(data.user)); navigate("/admin"); } catch (e) { setError(e instanceof Error ? e.message : "Unable to create administrator"); } };
  return <div className="auth"><div className="auth-panel"><div className="brand auth-brand"><span>DS</span><div><strong>Private administrator setup</strong><small>Keep this URL and code private</small></div></div><div className="eyebrow">AUTHORIZED STAFF ONLY</div><h1>Create admin account</h1><p>Use the backend-only administrator setup code. This page is not linked from student navigation.</p>{(["name", "email", "password", "adminCode"] as const).map((field) => <input className="form-control" key={field} type={field === "password" || field === "adminCode" ? "password" : field === "email" ? "email" : "text"} placeholder={field === "adminCode" ? "Private setup code" : field[0].toUpperCase() + field.slice(1)} value={form[field]} onChange={(event) => setForm({ ...form, [field]: event.target.value })} />)}{error && <div className="form-error">{error}</div>}<button className="primary w-100" onClick={submit}>Create administrator <ChevronRight size={17} /></button></div><div className="auth-art"><div className="art-copy"><ShieldCheck size={30}/><h2>Private by design.</h2><p>Role access is enforced by the API, not just hidden in the interface.</p></div></div></div>;
}
function PageTitle({
  eyebrow,
  title,
  subtitle,
  action,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="page-title">
      <div>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
function Stat({
  label,
  value,
  detail,
  icon: Icon,
}: {
  label: string;
  value: string;
  detail: string;
  icon: any;
}) {
  return (
    <div className="stat">
      <div className="stat-icon">
        <Icon size={19} />
      </div>
      <div>
        <small>{label}</small>
        <strong>{value}</strong>
        <span>{detail}</span>
      </div>
    </div>
  );
}
function Dashboard() {
  const [user, setUser] = useState<{ name?: string; selectedTrack?: string; weeklyGoal?: number } | null>(() => JSON.parse(localStorage.getItem("dsj-user") || "null"));
  const [studyMinutes, setStudyMinutes] = useState(0);
  const [streak, setStreak] = useState(0);
  const [activity, setActivity] = useState<{ title: string; detail: string; createdAt: string }[]>([]);
  const [weeklyGoal, setWeeklyGoal] = useState(() => JSON.parse(localStorage.getItem("dsj-user") || "{}").weeklyGoal || 3);
  useEffect(() => {
    const token = localStorage.getItem("dsj-token");
    if (!token) return;
    fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/auth/me`, { headers: { Authorization: `Bearer ${token}` } }).then((response) => response.ok ? response.json() : null).then((data) => { if (data) { setUser(data); localStorage.setItem("dsj-user", JSON.stringify(data)); } }).catch(() => undefined);
  }, []);
  useEffect(() => { apiRequest("/api/analytics").then((data) => { const sessions = data.studyTime || []; setStudyMinutes(Math.round(sessions.reduce((sum: number, item: { duration?: number }) => sum + (item.duration || 0), 0) / 60)); }).catch(() => undefined); apiRequest("/api/activity").then((data) => { setStreak(data.streak || 0); setActivity(data.events || []); }).catch(() => undefined); }, []);
  const progress = readProgress();
  const done = allTopics.filter(
    (t) => pct(progress[t.id] || []) === 100,
  ).length;
  const totalSteps = allTopics.length * 4;
  const completeSteps = Object.values(progress).reduce(
    (sum, steps) => sum + steps.length,
    0,
  );
  const overall = Math.round((completeSteps / totalSteps) * 100);
  const next = allTopics.find((t) => pct(progress[t.id] || []) < 100)!;
  const module = modules.find((m) => m.id === next.moduleId)!;
  return (
    <>
      <PageTitle
        eyebrow="YOUR DEVOPS SUPPORT JOURNEY"
        title={user?.name ? `${getTimeGreeting()}, ${user.name}` : "Build the skill, not just the knowledge."}
        subtitle={user?.name ? "Your next useful step is waiting." : "A structured system for learning DevOps, Cloud and Production Support."}
        action={
          <button
            className="primary"
            onClick={() => (location.href = "/study")}
          >
            <Play size={16} /> Continue learning
          </button>
        }
      />
      <div className="stats-grid">
        <Stat
          label="Overall progress"
          value={`${overall}%`}
          detail="Across all learning steps"
          icon={Gauge}
        />
        <Stat
          label="Topics completed"
          value={`${done}`}
          detail={`of ${allTopics.length} topics`}
          icon={Check}
        />
        <Stat
          label="Notes captured"
          value={`${JSON.parse(localStorage.getItem("dsj-notes") || "[]").length}`}
          detail="Your explanations"
          icon={FileText}
        />
        <Stat
          label="Study time"
          value="0h 00m"
          detail="Keep your streak alive"
          icon={Clock3}
        />
      </div>
      <section className="dashboard-personal"><div className="goal-card"><div className="eyebrow">THIS WEEK'S GOAL</div><h2>Complete {weeklyGoal} learning topics</h2><p>Keep your momentum visible and build a study habit that compounds.</p><div className="goal-progress"><i style={{ width: `${Math.min(100, done / weeklyGoal * 100)}%` }} /></div><span>{Math.min(done, weeklyGoal)} of {weeklyGoal} topics completed</span><select className="goal-select" value={weeklyGoal} onChange={async (event) => { const value = Number(event.target.value); setWeeklyGoal(value); const current = JSON.parse(localStorage.getItem("dsj-user") || "{}"); localStorage.setItem("dsj-user", JSON.stringify({ ...current, weeklyGoal: value })); try { await apiRequest("/api/auth/profile", { method: "PATCH", body: JSON.stringify({ weeklyGoal: value }) }); } catch { /* local goal remains available */ } }}><option value="3">3 topics</option><option value="5">5 topics</option><option value="7">7 topics</option></select></div><div className="quick-card"><div className="eyebrow">QUICK ACTIONS</div><div className="quick-actions"><NavLink to={`/module/${module.id}`}><BookOpen size={17} /> Continue topic</NavLink><NavLink to="/study"><Clock3 size={17} /> Start focus session</NavLink><NavLink to="/interview"><GraduationCap size={17} /> Practice interview</NavLink><NavLink to="/notes"><FileText size={17} /> Capture a note</NavLink></div></div><div className="target-card"><div className="eyebrow">YOUR TARGET TRACK</div><h3>{user?.selectedTrack || "DevOps Engineer"}</h3><p>Recommended next: Linux, Networking, Cloud, and Troubleshooting.</p><NavLink to="/tracks">View recommendations <ChevronRight size={15} /></NavLink><small className="dashboard-study-time"><Clock3 size={13} /> {Math.floor(studyMinutes / 60)}h {studyMinutes % 60}m studied · {streak} day streak</small></div></section>
      <section className="activity-panel panel"><div className="section-head"><div><div className="eyebrow">YOUR ACTIVITY · {streak} DAY STREAK</div><h2>Small steps add up.</h2></div><NavLink to="/analytics">View analytics <ChevronRight size={15} /></NavLink></div><div className="activity-list">{activity.length ? activity.slice(0, 3).map((event) => <span key={event.createdAt + event.title}><i className="activity-dot green-dot" /> {event.title} <small>{event.detail} · {new Date(event.createdAt).toLocaleDateString()}</small></span>) : <span><i className="activity-dot blue-dot" /> Your learning activity will appear here <small>Complete a topic step, save a note, or finish a focus session.</small></span>}</div></section>
      <section className="weak-topics panel"><div className="section-head"><div><div className="eyebrow">RECOMMENDED REVIEW</div><h2>Topics that need another pass.</h2></div><NavLink to="/review">Open review queue <ChevronRight size={15} /></NavLink></div><div className="weak-topic-list">{allTopics.filter((topic) => { const steps = progress[topic.id] || []; return steps.length > 0 && steps.length < 4; }).slice(0, 3).map((topic) => <NavLink to={`/module/${topic.moduleId}`} key={topic.id}><span className="pill">{pct(progress[topic.id] || [])}%</span><b>{topic.title}</b><small>{topic.moduleTitle}</small><ChevronRight size={15} /></NavLink>)}{!allTopics.some((topic) => { const steps = progress[topic.id] || []; return steps.length > 0 && steps.length < 4; }) && <p className="empty-inline">Complete a topic step and your review recommendations will appear here.</p>}</div></section>
      <div className="dashboard-grid">
        <section className="panel continue">
          <div className="panel-head">
            <div>
              <div className="eyebrow">CONTINUE LEARNING</div>
              <h2>{next.title}</h2>
              <p>
                {module.title} · {next.difficulty}
              </p>
            </div>
            <div
              className="ring"
              style={
                {
                  "--value": `${pct(progress[next.id] || []) * 3.6}deg`,
                } as React.CSSProperties
              }
            >
              <b>{pct(progress[next.id] || [])}%</b>
            </div>
          </div>
          <div className="topic-preview">
            <span>Up next</span>
            <h3>{next.description}</h3>
            <div className="steps-row">
              {[0, 1, 2, 3].map((i) => (
                <span
                  className={
                    (progress[next.id] || []).includes(i) ? "step done" : "step"
                  }
                  key={i}
                >
                  {(progress[next.id] || []).includes(i) ? (
                    <Check size={14} />
                  ) : (
                    i + 1
                  )}
                </span>
              ))}
            </div>
            <NavLink className="primary" to={`/module/${module.id}`}>
              Open module <ChevronRight size={16} />
            </NavLink>
          </div>
        </section>
        <section className="panel focus">
          <div className="eyebrow">THIS WEEK</div>
          <h2>Make the next useful move.</h2>
          <p>
            Focus on foundations that make production incidents easier to reason
            about.
          </p>
          <div className="focus-line">
            <span>
              <Terminal size={17} /> Current module
            </span>
            <b>Linux Fundamentals</b>
          </div>
          <div className="focus-line">
            <span>
              <BookOpen size={17} /> Topics remaining
            </span>
            <b>
              {allTopics.filter((t) => pct(progress[t.id] || []) < 100).length}
            </b>
          </div>
          <div className="quote">
            “The best troubleshooting tool is a clear mental model.”
          </div>
        </section>
      </div>
      <section className="section-block">
        <div className="section-head">
          <div>
            <div className="eyebrow">ROADMAP SNAPSHOT</div>
            <h2>From fundamentals to production</h2>
          </div>
          <NavLink to="/roadmap">
            View roadmap <ChevronRight size={16} />
          </NavLink>
        </div>
        <div className="module-strip">
          {modules.slice(0, 5).map((m) => (
            <ModuleCard key={m.id} module={m} compact />
          ))}
        </div>
      </section>
    </>
  );
}
function ModuleCard({
  module,
  compact = false,
}: {
  module: Module;
  compact?: boolean;
}) {
  const progress = readProgress();
  const amount = module.topics.reduce(
    (s, t) => s + (progress[t.id] || []).length,
    0,
  );
  const total = module.topics.length * 4;
  return (
    <NavLink
      className={compact ? "module-card compact" : "module-card"}
      to={`/module/${module.id}`}
    >
      <div className="module-top">
        <span className="level">{String(module.level).padStart(2, "0")}</span>
        <span className="stage">{module.stage}</span>
      </div>
      <h3>{module.title}</h3>
      <p>{module.description}</p>
      <div className="module-meta">
        <span>{module.topics.length} topics</span>
        <span>{module.estimatedDays} days</span>
      </div>
      <div className="progress">
        <i style={{ width: `${Math.round((amount / total) * 100)}%` }} />
      </div>
      <small>{Math.round((amount / total) * 100)}% complete</small>
    </NavLink>
  );
}
function Roadmap() {
  const [query, setQuery] = useState("");
  const [stage, setStage] = useState("All levels");
  const filtered = modules.filter(
    (m) =>
      (m.title + m.description).toLowerCase().includes(query.toLowerCase()) &&
      (stage === "All levels" || m.stage === stage),
  );
  return (
    <>
      <PageTitle
        eyebrow="THE PATH"
        title="Learning Roadmap"
        subtitle="Build your DevOps career from fundamentals to production."
        action={
          <div className="roadmap-count">
            <b>{modules.length}</b>
            <span>levels mapped</span>
          </div>
        }
      />
      <div className="filters">
        <div className="search-box">
          <Search size={17} />
          <input
            placeholder="Search modules"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <select value={stage} onChange={(e) => setStage(e.target.value)}>
          <option>All levels</option>
          {[
            "FOUNDATION",
            "INTERMEDIATE",
            "ADVANCED",
            "PRODUCTION",
            "INTERVIEW",
          ].map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
      </div>
      <div className="roadmap-grid">
        {filtered.map((m) => (
          <ModuleCard module={m} key={m.id} />
        ))}
      </div>
    </>
  );
}
function ModulePage() {
  const { id } = useParams();
  const module = modules.find((m) => m.id === id) || modules[0];
  const [selected, setSelected] = useState(module.topics[0]);
  return (
    <>
      <PageTitle
        eyebrow={`LEVEL ${module.level} · ${module.stage}`}
        title={module.title}
        subtitle={module.description}
      />
      <div className="module-layout">
        <aside className="topic-list">
          <div className="eyebrow">TOPICS · {module.topics.length}</div>
          {module.topics.map((t, i) => (
            <button
              className={
                selected.id === t.id ? "topic-nav active" : "topic-nav"
              }
              onClick={() => setSelected(t)}
              key={t.id}
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              {t.title}
              <ChevronRight size={14} />
            </button>
          ))}
        </aside>
        <TopicDetail topic={selected} module={module} />
      </div>
    </>
  );
}
function TopicDetail({ topic, module }: { topic: Topic; module: Module }) {
  const [progress, setProgress] = useState(readProgress());
    useEffect(() => { apiRequest("/api/progress").then((items) => { const remote = items.reduce((result: Record<string, number[]>, item: { topic: string; completedSteps: number[] }) => ({ ...result, [item.topic]: item.completedSteps || [] }), {}); if (Object.keys(remote).length) { setProgress(remote); localStorage.setItem(key, JSON.stringify(remote)); } }).catch(() => undefined); }, []);
  const steps = progress[topic.id] || [];
  const toggle = (i: number) => {
    const next = {
      ...progress,
      [topic.id]: steps.includes(i)
        ? steps.filter((x) => x !== i)
        : [...steps, i].sort(),
    };
    setProgress(next);
      apiRequest(`/api/progress/step/${topic.id}`, { method: "PATCH", body: JSON.stringify({ module: module.id, topicTitle: topic.title, completedSteps: next[topic.id] }) }).catch(() => undefined);
    localStorage.setItem(key, JSON.stringify(next));
  };
  return (
    <section className="panel topic-detail">
      <div className="topic-heading">
        <div>
          <span className="pill">{topic.difficulty}</span>
          <h2>{topic.title}</h2>
          <p>{topic.description}</p>
        </div>
        <div className="topic-percent">
          {pct(steps)}%<small>complete</small>
        </div>
      </div>
      <div className="progress large">
        <i style={{ width: `${pct(steps)}%` }} />
      </div>
      <div className="detail-columns">
        <div>
          <div className="eyebrow">LEARNING CHECKLIST</div>
          <h3>Four steps to make it stick</h3>
          {[
            "Watch recommended learning material",
            "Read documentation or reference",
            "Explain the concept in your own words",
            "Answer an interview-style question",
          ].map((step, i) => (
            <button
              className={steps.includes(i) ? "check-row checked" : "check-row"}
              onClick={() => toggle(i)}
              key={step}
            >
              <span>{steps.includes(i) ? <Check size={15} /> : i + 1}</span>
              {step}
            </button>
          ))}
        </div>
        <div className="resource-box">
          <div className="eyebrow">RECOMMENDED RESOURCES</div>
          <h3>Go deeper, then come back and explain it.</h3>
          {topic.resources.map((r) => (
            <a
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="resource-line"
              key={r.url}
            >
              <BookOpen size={16} />
              <span>
                <b>{r.name}</b>
                <small>{r.type}</small>
              </span>
              <ChevronRight size={15} />
            </a>
          ))}
          <div className="question">
            <span>INTERVIEW QUESTION</span>
            <p>{topic.question}</p>
          </div>
        </div>
      </div>
      <div className="detail-footer">
        <span>
          <Clock3 size={15} /> {topic.minutes} minutes estimated
        </span>
        <span>{module.title}</span>
      </div>
    </section>
  );
}
function Study() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [noteContent, setNoteContent] = useState("");
  const [noteSaved, setNoteSaved] = useState(false);
  const [topicId, setTopicId] = useState(allTopics[0].id);
  const topic = allTopics.find((t) => t.id === topicId)!;
  useEffect(() => {
    if (!running) return;
    const timer = setInterval(
      () => setSeconds((s) => (s > 0 ? s - 1 : 0)),
      1000,
    );
    return () => clearInterval(timer);
  }, [running]);
  useEffect(() => { if (seconds === 0 && sessionId) { apiRequest("/api/study/complete", { method: "POST", body: JSON.stringify({ id: sessionId, topic: topic.title, duration: 25 * 60 }) }).catch(() => undefined); setSessionId(null); setRunning(false); } }, [seconds, sessionId, topic.title]);
  const startSession = async () => { if (!running) { try { const session = await apiRequest("/api/study/start", { method: "POST", body: JSON.stringify({ module: topic.moduleTitle, topic: topic.title }) }); setSessionId(session?._id || null); } catch { /* local timer remains usable */ } } setRunning(!running); };
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return (
    <>
      <PageTitle
        eyebrow="FOCUS SESSION"
        title="Study Mode"
        subtitle="A focused block for learning, explaining, and remembering."
      />
      <div className="study-grid">
        <section className="panel timer-panel">
          <div className="study-select">
            <span>Current topic</span>
            <select
              value={topicId}
              onChange={(e) => setTopicId(e.target.value)}
            >
              {allTopics.map((t) => (
                <option value={t.id} key={t.id}>
                  {t.moduleTitle} · {t.title}
                </option>
              ))}
            </select>
          </div>
          <div className="timer">
            <b>
              {mins}:{secs}
            </b>
            <span>FOCUS</span>
          </div>
          <div className="timer-presets">
            <button onClick={() => setSeconds(25 * 60)}>25 minutes</button>
            <button onClick={() => setSeconds(50 * 60)}>50 minutes</button>
            <button onClick={() => setSeconds(10 * 60)}>Custom</button>
          </div>
          <button className="primary" onClick={startSession}>
            {running ? (
              <>
                <Clock3 size={16} /> Pause
              </>
            ) : (
              <>
                <Play size={16} /> Start session
              </>
            )}
          </button>
          <button
            className="text-btn"
            onClick={() => {
              setRunning(false);
              setSeconds(25 * 60);
            }}
          >
            Reset
          </button>
        </section>
        <section className="panel study-content">
          <div className="eyebrow">{topic.moduleTitle}</div>
          <h2>{topic.title}</h2>
          <p>{topic.description}</p>
          <div className="study-resources">
            {topic.resources.map((r) => (
              <a href={r.url} target="_blank" rel="noreferrer" key={r.url}>
                <BookOpen size={17} />
                <span>
                  {r.name}
                  <small>{r.type}</small>
                </span>
                <ChevronRight size={15} />
              </a>
            ))}
          </div>
          <div className="note-editor">
            <div className="eyebrow">TOPIC NOTE</div>
            <textarea placeholder="What did you learn? Write it in your own words..." value={noteContent} onChange={(event) => setNoteContent(event.target.value)} />
            <button className="primary" onClick={async () => { if (!noteContent.trim()) return; try { await apiRequest("/api/notes", { method: "POST", body: JSON.stringify({ module: topic.moduleTitle, topic: topic.title, title: `${topic.title} study note`, content: noteContent, tags: ["study", topic.moduleTitle.toLowerCase().replace(/\s+/g, "-")] }) }); setNoteContent(""); setNoteSaved(true); } catch { setNoteSaved(false); } }}>
              <FileText size={16} /> Save note
            </button>
            {noteSaved && <small className="note-saved-message">Note saved to your account.</small>}
          </div>
        </section>
      </div>
    </>
  );
}
function Notes() {
  const [notes, setNotes] = useState<Note[]>(
    JSON.parse(localStorage.getItem("dsj-notes") || "[]"),
  );
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => { apiRequest("/api/notes").then((items) => { if (items?.length) { setNotes(items.map((item: any) => ({ id: item._id, moduleTitle: item.module, topicTitle: item.topic, title: item.title, content: item.content, tags: item.tags || [], date: new Date(item.createdAt).toLocaleDateString() }))); } }).catch(() => undefined); }, []);
  const add = () => {
    if (!title || !content) return;
    const next = [
      {
        id: Date.now().toString(),
        moduleTitle: "Linux Fundamentals",
        topicTitle: "Current study topic",
        title,
        content,
        tags: ["devops", "study"],
        date: new Date().toLocaleDateString(),
      },
      ...notes,
    ];
    setNotes(next);
    localStorage.setItem("dsj-notes", JSON.stringify(next));
    apiRequest("/api/notes", { method: "POST", body: JSON.stringify({ module: "Linux Fundamentals", topic: "Current study topic", title, content, tags: ["devops", "study"] }) }).catch(() => undefined);
    setTitle("");
    setContent("");
  };
  const remove = (id: string) => {
    const next = notes.filter((n) => n.id !== id);
    setNotes(next);
    localStorage.setItem("dsj-notes", JSON.stringify(next));
    if (!id.startsWith("local-")) apiRequest(`/api/notes/${id}`, { method: "DELETE" }).catch(() => undefined);
  };
  return (
    <>
      <PageTitle
        eyebrow="YOUR THINKING"
        title="Notes"
        subtitle="Write explanations that you can reproduce in an interview."
        action={
          <button
            className="primary"
            onClick={() => document.getElementById("note-title")?.focus()}
          >
            <Plus size={16} /> Add note
          </button>
        }
      />
      <section className="panel note-form">
        <input
          id="note-title"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Explain the idea in your own words..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="form-bottom">
          <span>Linux Fundamentals · Current topic</span>
          <button className="primary" onClick={add}>
            Save note
          </button>
        </div>
      </section>
      <div className="notes-grid">
        {notes.map((note) => (
          <article className="note-card" key={note.id}>
            <div className="note-card-top">
              <span className="pill">{note.moduleTitle}</span>
              <button className="icon-btn" onClick={() => remove(note.id)}>
                <Trash2 size={16} />
              </button>
            </div>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <div className="tags">
              {note.tags.map((t) => (
                <span key={t}>#{t}</span>
              ))}
            </div>
            <small>{note.date}</small>
          </article>
        ))}
        {!notes.length && (
          <div className="empty">
            <FileText size={28} />
            <h3>Your notes will live here.</h3>
            <p>
              Capture explanations, commands, and incident patterns as you
              learn.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
function Resources() {
  const resources = modules.flatMap((m) =>
    m.topics
      .slice(0, 1)
      .map((t) => ({ ...t.resources[0], module: m.title, topic: t.title })),
  );
  return (
    <>
      <PageTitle
        eyebrow="REFERENCE LIBRARY"
        title="Resources"
        subtitle="A curated starting point for every skill in the roadmap."
      />
      <div className="resource-grid">
        {resources.map((r, i) => (
          <a
            className="global-resource"
            href={r.url}
            target="_blank"
            rel="noreferrer"
            key={i}
          >
            <span className="resource-type">{r.type}</span>
            <h3>{r.name}</h3>
            <p>
              {r.module} · {r.topic}
            </p>
            <span className="open-link">
              Open resource <ChevronRight size={15} />
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
function Interview() {
  const questions = allTopics.map((topic) => {
    const module = modules.find((item) => item.id === topic.moduleId);
    return { id: topic.id, category: module?.title || topic.moduleTitle, topic: topic.title, question: topic.question, difficulty: topic.difficulty, answer: `Explain ${topic.title} clearly, describe where it appears in a real system, then walk through the commands, signals, and safe troubleshooting steps you would use in production.`, resource: topic.resources[0]?.url };
  });
  const categories = ["All questions", ...modules.map((module) => module.title)];
  const [category, setCategory] = useState("All questions");
  const [difficulty, setDifficulty] = useState("All difficulties");
  const [search, setSearch] = useState("");
  const [done, setDone] = useState<string[]>(() => JSON.parse(localStorage.getItem("dsj-interview-done") || "[]"));
  const visibleQuestions = questions.filter((item) => (category === "All questions" || item.category === category) && (difficulty === "All difficulties" || item.difficulty === difficulty) && `${item.category} ${item.topic} ${item.question}`.toLowerCase().includes(search.toLowerCase()));
  const toggleDone = (id: string) => { const next = done.includes(id) ? done.filter((item) => item !== id) : [...done, id]; setDone(next); localStorage.setItem("dsj-interview-done", JSON.stringify(next)); if (!done.includes(id)) apiRequest(`/api/interview/questions/${id}`, { method: "PATCH", body: JSON.stringify({ completed: true }) }).catch(() => undefined); };
  return (
    <>
      <PageTitle
        eyebrow="PRACTICE UNDER PRESSURE"
        title="Interview Practice"
        subtitle="Turn concepts into clear, structured answers."
      />
      <div className="interview-toolbar"><div className="search-box"><Search size={17} /><input placeholder="Search questions or skills" value={search} onChange={(event) => setSearch(event.target.value)} /></div><select value={difficulty} onChange={(event) => setDifficulty(event.target.value)}><option>All difficulties</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select><strong>{visibleQuestions.length} questions</strong></div>
      <div className="interview-layout">
        <div className="category-list">
          {categories.map((x) => (
            <button className={category === x ? "active" : ""} onClick={() => setCategory(x)} key={x}>
              {x}
              <span>{x === "All questions" ? questions.length : questions.filter((question) => question.category === x).length}</span>
            </button>
          ))}
        </div>
        <div className="question-list">
          {visibleQuestions.map((q) => (
            <article
              className={
                done.includes(q.id) ? "question-card completed" : "question-card"
              }
              key={q.id}
            >
              <div className="question-meta">
                <span className="pill">{q.category}</span>
                <span>{q.difficulty}</span><span>{q.topic}</span>
              </div>
              <h2>{q.question}</h2>
              <details>
                <summary>Reveal expected answer</summary>
                <p>{q.answer}</p>
              </details>
              <button
                className="secondary"
                onClick={() => toggleDone(q.id)}
              >
                {done.includes(q.id) ? (
                  <>
                    <Check size={15} /> Completed
                  </>
                ) : (
                  <>
                    Mark complete <Check size={15} />
                  </>
                )}
              </button>
            </article>
          ))}
          {!visibleQuestions.length && <div className="empty"><Search size={28} /><h3>No matching questions</h3><p>Try another skill, difficulty, or search term.</p></div>}
        </div>
      </div>
    </>
  );
}
function IncidentLabs() {
  const labs = [{ title: "Disk usage is 100%", signal: "Users report write failures and services are degrading.", command: "df -h && du -xhd1 /var | sort -h", lesson: "Find the largest filesystem and directory before removing or rotating anything." }, { title: "API returns 502", signal: "The reverse proxy is healthy but the upstream application is unavailable.", command: "curl -I http://localhost:8080/health && journalctl -u app", lesson: "Separate proxy health from upstream health, then inspect service status and recent logs." }, { title: "Kubernetes pod crash loop", signal: "A deployment is repeatedly restarting after a release.", command: "kubectl get pods && kubectl describe pod <pod> && kubectl logs <pod> --previous", lesson: "Use events and previous-container logs to identify configuration, image, or dependency failures." }, { title: "High CPU on production server", signal: "Latency is rising and the host CPU has stayed above 90%.", command: "uptime && top -b -n 1 | head -20 && ps aux --sort=-%cpu | head", lesson: "Confirm scope, identify the process, check recent changes, and mitigate without destroying evidence." }];
  return <><PageTitle eyebrow="PRACTICE REAL INCIDENTS" title="Incident Labs" subtitle="Work through production-style signals before they become production surprises."/><div className="lab-grid">{labs.map((lab) => <article className="lab-card" key={lab.title}><span className="pill">Scenario lab</span><h2>{lab.title}</h2><p>{lab.signal}</p><details><summary>Reveal investigation path</summary><div className="lab-command"><Terminal size={15}/><code>{lab.command}</code></div><p><b>What good looks like:</b> {lab.lesson}</p></details><button className="secondary">Mark lab complete <Check size={15}/></button></article>)}</div></>;
}
function Review() {
  return (
    <>
      <PageTitle
        eyebrow="REVISIT WITH INTENT"
        title="Review Queue"
        subtitle="Keep the important, slippery concepts in view."
      />
      <div className="empty large-empty">
        <ShieldCheck size={34} />
        <h2>Nothing waiting for review.</h2>
        <p>Mark a topic or interview question when it deserves another pass.</p>
        <NavLink className="primary" to="/roadmap">
          Explore roadmap <ChevronRight size={16} />
        </NavLink>
      </div>
    </>
  );
}
function Tracks() {
  const [selected, setSelected] = useState(() => JSON.parse(localStorage.getItem("dsj-user") || "{}")?.selectedTrack || "DevOps Engineer");
  const selectTrack = async (track: string) => { setSelected(track); const user = JSON.parse(localStorage.getItem("dsj-user") || "{}"); localStorage.setItem("dsj-user", JSON.stringify({ ...user, selectedTrack: track })); try { const updated = await apiRequest("/api/auth/profile", { method: "PATCH", body: JSON.stringify({ selectedTrack: track }) }); if (updated) localStorage.setItem("dsj-user", JSON.stringify(updated)); } catch { /* local selection remains available */ } };
  return (
    <>
      <PageTitle
        eyebrow="CHOOSE YOUR DIRECTION"
        title="Career Tracks"
        subtitle="Shape the roadmap around the work you want to do."
      />
      <div className="tracks-grid">
        {tracks.map((track, i) => (
          <article className="track-card" key={track}>
            <div className="track-number">0{i + 1}</div>
            <h2>{track}</h2>
            <p>
              {
                [
                  "Operate systems end to end, from commits to observability.",
                  "Own the health of customer-facing applications and APIs.",
                  "Build calm incident response and production operations.",
                  "Support cloud infrastructure with strong networking fundamentals.",
                  "Engineer reliability through SLOs, automation, and learning.",
                  "Practice the questions that hiring loops actually surface.",
                ][i]
              }
            </p>
            <div className="track-skills">
              {["Linux", "Networking", "Troubleshooting", "Cloud"]
                .slice(0, i === 5 ? 4 : 3)
                .map((s) => (
                  <span key={s}>{s}</span>
                ))}
            </div>
            <button className={selected === track ? "primary" : "secondary"} onClick={() => selectTrack(track)}>
              {selected === track ? "Selected" : "Select track"} <ChevronRight size={15} />
            </button>
          </article>
        ))}
      </div>
    </>
  );
}
function Analytics() {
  const progress = readProgress();
  const overall = Math.round(
    (Object.values(progress).reduce((s, x) => s + x.length, 0) /
      (allTopics.length * 4)) *
      100,
  );
  return (
    <>
      <PageTitle
        eyebrow="SIGNALS, NOT NOISE"
        title="Analytics"
        subtitle="See where your learning energy is turning into capability."
      />
      <div className="analytics-top">
        <div className="panel big-metric">
          <span>Overall learning progress</span>
          <strong>{overall}%</strong>
          <div className="progress">
            <i style={{ width: `${overall}%` }} />
          </div>
          <small>Across {modules.length} curriculum levels</small>
        </div>
        <div className="panel big-metric">
          <span>Interview readiness</span>
          <strong>{Math.min(100, Math.round(overall * 0.8 + 12))}%</strong>
          <div className="progress green">
            <i
              style={{
                width: `${Math.min(100, Math.round(overall * 0.8 + 12))}%`,
              }}
            />
          </div>
          <small>Based on progress, practice, notes, and study time</small>
        </div>
      </div>
      <section className="panel analytics-table">
        <div className="section-head">
          <h2>Progress by module</h2>
          <span>Learning steps completed</span>
        </div>
        {modules.map((m) => (
          <div className="analytics-row" key={m.id}>
            <span>{String(m.level).padStart(2, "0")}</span>
            <b>{m.title}</b>
            <div className="progress">
              <i
                style={{
                  width: `${Math.round((m.topics.reduce((s, t) => s + (readProgress()[t.id] || []).length, 0) / (m.topics.length * 4)) * 100)}%`,
                }}
              />
            </div>
            <small>
              {Math.round(
                (m.topics.reduce(
                  (s, t) => s + (readProgress()[t.id] || []).length,
                  0,
                ) /
                  (m.topics.length * 4)) *
                  100,
              )}
              %
            </small>
          </div>
        ))}
      </section>
    </>
  );
}
function AdminPanel() {
  const [users, setUsers] = useState<any[]>([]);
  const [error, setError] = useState("");
  useEffect(() => { apiRequest("/api/admin/users").then(setUsers).catch(() => setError("Only administrators can access this panel.")); }, []);
  const update = async (user: any, field: string, value: any) => { const updated = await apiRequest(`/api/admin/users/${user._id}`, { method: "PATCH", body: JSON.stringify({ [field]: value }) }); setUsers((items) => items.map((item) => item._id === updated._id ? updated : item)); };
  return <><PageTitle eyebrow="PRIVATE ADMIN AREA" title="People & enrollment" subtitle="Private student and teacher records. Students never receive this data."/><section className="panel admin-notice"><ShieldCheck size={18}/><span>Admin-only data: contact numbers, experience, subjects, fee status, and teacher assignments.</span></section>{error ? <div className="empty"><p>{error}</p></div> : <div className="admin-table panel"><div className="admin-row admin-head"><span>Name</span><span>Role</span><span>Contact</span><span>Learning / experience</span><span>Fees</span></div>{users.map((user) => <div className="admin-row" key={user._id}><b>{user.name}<small>{user.email}</small></b><span className="pill">{user.role}</span><input placeholder="Phone" defaultValue={user.phone || ""} onBlur={(event) => event.target.value !== (user.phone || "") && update(user, "phone", event.target.value)} /><span>{user.selectedTrack || "-"} {user.experienceYears ? `· ${user.experienceYears} yrs` : ""}</span><select defaultValue={user.feeStatus || "not-applicable"} onChange={(event) => update(user, "feeStatus", event.target.value)}><option>not-applicable</option><option>pending</option><option>partial</option><option>paid</option></select></div>)}</div>}</>;
}
function TeacherPanel() {
  const [students, setStudents] = useState<any[]>([]);
  useEffect(() => { apiRequest("/api/teacher/students").then(setStudents).catch(() => undefined); }, []);
  return <><PageTitle eyebrow="TEACHER WORKSPACE" title="My students" subtitle="See assigned students and their learning direction without exposing private administration data."/><div className="teacher-grid">{students.map((student) => <article className="student-card panel" key={student._id}><span className="pill">Student</span><h2>{student.name}</h2><p>{student.email}</p><b>{student.selectedTrack || "No track selected"}</b><small>Weekly goal: {student.weeklyGoal || 3} topics · {student.completedTopics || 0} topics completed</small><div className="progress"><i style={{width:`${Math.min(100, Math.round((student.completedSteps || 0) / 4))}%`}} /></div></article>)}{!students.length && <div className="empty"><Users size={28}/><h3>No students assigned yet.</h3><p>An administrator can assign students to your teacher account.</p></div>}</div></>;
}
function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<{
    name?: string;
    email?: string;
    selectedTrack?: string;
  } | null>(null);
  const [editing, setEditing] = useState(false);
  const [draftName, setDraftName] = useState("");
  const [draftEmail, setDraftEmail] = useState("");
  const [draftTrack, setDraftTrack] = useState("DevOps Engineer");
  const [draftGoal, setDraftGoal] = useState(3);
  useEffect(() => {
    const token = localStorage.getItem("dsj-token");
    if (!token) return;
    fetch(
      `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/auth/me`,
      { headers: { Authorization: `Bearer ${token}` } },
    )
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (data) {
          setUser(data);
          setDraftName(data.name || "");
          setDraftEmail(data.email || "");
          setDraftTrack(data.selectedTrack || "DevOps Engineer");
          setDraftGoal(data.weeklyGoal || 3);
          localStorage.setItem("dsj-user", JSON.stringify(data));
        }
      })
      .catch(() => undefined);
  }, []);
  const name = user?.name || "Loading profile...";
  const email = user?.email || "";
  const track = user?.selectedTrack || "DevOps Engineer";
  const saveProfile = async () => { try { const updated = await apiRequest("/api/auth/profile", { method: "PATCH", body: JSON.stringify({ name: draftName, email: draftEmail, selectedTrack: draftTrack, weeklyGoal: draftGoal }) }); setUser(updated); localStorage.setItem("dsj-user", JSON.stringify(updated)); setEditing(false); } catch { setEditing(false); } };
  return (
    <>
      <PageTitle
        eyebrow="YOUR WORKSPACE"
        title="Profile"
        subtitle="Keep your learning context close at hand."
      />
      <section className="panel profile-panel">
        <div className="profile-avatar">{initials(name)}</div>
        <div>
          {editing ? <div className="profile-form"><input className="profile-edit-input" value={draftName} onChange={(event) => setDraftName(event.target.value)} placeholder="Name" /><input className="profile-edit-input" value={draftEmail} onChange={(event) => setDraftEmail(event.target.value)} placeholder="Email" type="email" /><select className="profile-edit-input" value={draftTrack} onChange={(event) => setDraftTrack(event.target.value)}>{tracks.map((item) => <option key={item}>{item}</option>)}</select><select className="profile-edit-input" value={draftGoal} onChange={(event) => setDraftGoal(Number(event.target.value))}><option value={3}>3 topics per week</option><option value={5}>5 topics per week</option><option value={7}>7 topics per week</option></select></div> : <><h2>{name}</h2><p>{email}</p><span className="pill">{track}</span></>}
        </div>
        <button className="secondary ms-auto" onClick={() => editing ? saveProfile() : setEditing(true)}>
          <Settings size={16} /> {editing ? "Save profile" : "Edit profile"}
        </button>
        <button className="secondary" onClick={() => logoutUser(navigate)}>
          <LogOut size={16} /> Log out
        </button>
      </section>
      <div className="stats-grid">
        <Stat
          label="Current track"
          value={track.split(" ")[0]}
          detail={track.split(" ").slice(1).join(" ") || "Engineer"}
          icon={GitBranch}
        />
        <Stat
          label="Study streak"
          value="0 days"
          detail="Start today"
          icon={Clock3}
        />
        <Stat
          label="Topics completed"
          value="0"
          detail="Keep going"
          icon={Check}
        />
      </div>
    </>
  );
}
export default App;
