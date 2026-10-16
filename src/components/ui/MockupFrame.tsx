import type { ReactNode } from "react";

interface MockupFrameProps {
  variant: string;
  children?: ReactNode;
}

function DashboardMockup() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="h-3 w-24 rounded bg-border-light" />
        <div className="h-3 w-16 rounded bg-electric/40" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-md bg-surface-elevated p-3 space-y-2">
            <div className="h-2 w-12 rounded bg-text-muted" />
            <div className="h-4 w-8 rounded bg-electric/30" />
          </div>
        ))}
      </div>
      <div className="rounded-md bg-surface-elevated p-3 h-28 flex items-end gap-1.5">
        {[40, 65, 45, 80, 55, 90, 70, 60, 75, 50, 85, 68].map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-electric/50" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

function EcommerceMockup() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="h-3 w-20 rounded bg-border-light" />
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-2 w-8 rounded bg-text-muted" />
          ))}
        </div>
      </div>
      <div className="rounded-md bg-surface-elevated h-32 flex items-center justify-center">
        <div className="text-electric font-mono text-lg font-bold">EcoShop</div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-md bg-surface-elevated p-2 space-y-2">
            <div className="h-14 rounded bg-border" />
            <div className="h-2 w-16 rounded bg-text-muted" />
            <div className="h-2 w-10 rounded bg-electric/30" />
          </div>
        ))}
      </div>
    </div>
  );
}

function CollabMockup() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="h-3 w-24 rounded bg-border-light" />
        <div className="flex gap-1.5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-5 w-5 rounded-full bg-electric/30" />
          ))}
        </div>
      </div>
      <div className="relative rounded-md bg-surface-elevated h-40 overflow-hidden">
        <div className="absolute top-4 left-4 h-8 w-20 rounded-md bg-electric/20 border border-electric/40" />
        <div className="absolute top-16 right-6 h-8 w-16 rounded-md bg-purple-500/20 border border-purple-500/40" />
        <div className="absolute bottom-4 left-12 h-8 w-24 rounded-md bg-green-500/20 border border-green-500/40" />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 160">
          <line x1="56" y1="56" x2="200" y2="40" stroke="#0095FF" strokeWidth="1" opacity="0.4" />
          <line x1="200" y1="40" x2="130" y2="104" stroke="#8B5CF6" strokeWidth="1" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

const mockupMap: Record<string, () => ReactNode> = {
  dashboard: () => <DashboardMockup />,
  ecommerce: () => <EcommerceMockup />,
  collab: () => <CollabMockup />,
};

export function MockupFrame({ variant, children }: MockupFrameProps) {
  const renderMockup = mockupMap[variant] ?? mockupMap.dashboard;

  return (
    <div className="rounded-xl border border-border bg-surface-elevated overflow-hidden shadow-2xl shadow-black/20">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
        <div className="w-3 h-3 rounded-full bg-red-500/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <div className="w-3 h-3 rounded-full bg-green-500/60" />
      </div>
      {children ?? renderMockup()}
    </div>
  );
}
