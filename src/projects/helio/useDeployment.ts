import { useEffect, useRef, useState } from "react";
import { initialReleases, type Release } from "./releaseData";
export const deploymentEvents = [
  {
    time: "00:00.65",
    title: "Source received",
    detail: "Resolved 128 files · SHA 8f30a2c",
  },
  {
    time: "00:01.30",
    title: "Dependencies cached",
    detail: "Verified lockfile · 42 packages",
  },
  {
    time: "00:01.95",
    title: "Application compiled",
    detail: "Edge bundle 84.2 kB · Type checks passed",
  },
  {
    time: "00:02.60",
    title: "Release distributed",
    detail: "35 regions · All health checks passed",
  },
];
export function useDeployment() {
  const [environment, setEnvironment] = useState("Production");
  const [branch, setBranch] = useState("release/v1.4");
  const [phase, setPhase] = useState(0);
  const [showFailure, setShowFailure] = useState(false);
  const [releases, setReleases] = useState(initialReleases);
  const buildNumber = useRef(481);
  const startedAt = useRef(0);
  useEffect(() => {
    if (phase < 1 || phase >= deploymentEvents.length + 1) return;
    const timer = window.setTimeout(
      () => setPhase(showFailure && phase === 3 ? -1 : phase + 1),
      650,
    );
    return () => window.clearTimeout(timer);
  }, [phase, showFailure]);
  useEffect(() => {
    if (phase !== -1 && phase !== deploymentEvents.length + 1) return;
    const id = `dp_${String(buildNumber.current).padStart(4, "0")}`;
    const release: Release = {
      id,
      commit:
        phase === -1 ? "Region configuration check" : "Release application",
      sha: "8f30a2c",
      branch,
      environment,
      status: phase === -1 ? "Error" : "Ready",
      duration: (performance.now() - startedAt.current) / 1000,
      time: "Just now",
    };
    setReleases((current) =>
      current.some((entry) => entry.id === id)
        ? current
        : [release, ...current].slice(0, 20),
    );
  }, [phase, branch, environment]);
  const changeEnvironment = (value: string) => {
    if (phase > 0 && phase <= deploymentEvents.length) return;
    setEnvironment(value);
    setPhase(0);
  };
  const changeBranch = (value: string) => {
    if (phase > 0 && phase <= deploymentEvents.length) return;
    setBranch(value);
    setPhase(0);
  };
  return {
    environment,
    branch,
    phase,
    releases,
    buildNumber: buildNumber.current,
    showFailure,
    setShowFailure,
    changeEnvironment,
    changeBranch,
    run: () => {
      if (phase > 0 && phase <= deploymentEvents.length) return;
      buildNumber.current += 1;
      startedAt.current = performance.now();
      setPhase(1);
    },
    running: phase > 0 && phase <= deploymentEvents.length,
    ready: phase > deploymentEvents.length,
    failed: phase === -1,
  };
}
export type Deployment = ReturnType<typeof useDeployment>;
