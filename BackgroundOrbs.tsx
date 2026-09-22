export function BackgroundOrbs() {
  return (
    <>
      <div
        className="float-orb float-anim"
        style={{ width: "420px", height: "420px", background: "#38bdf8", top: "3%", left: "8%" }}
      />
      <div
        className="float-orb float-anim-delayed"
        style={{ width: "380px", height: "380px", background: "#a78bfa", top: "45%", right: "8%" }}
      />
      <div
        className="float-orb float-anim"
        style={{ width: "320px", height: "320px", background: "#5eead4", bottom: "8%", left: "35%", animationDelay: "-6s" }}
      />
    </>
  );
}
