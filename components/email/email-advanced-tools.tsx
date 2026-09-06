'use client';

import { HardDrive, Cloud, FileUp, CheckSquare, Sparkles } from 'lucide-react';

const advancedTools = [
  {
    title: 'More storage per mailbox',
    description: '10GB on Pro, 50GB on Premium, 100GB on Ultra. Room for years of mail and attachments.',
    icon: HardDrive,
  },
  {
    title: 'Titan Drive',
    description: 'Store and share files straight from your inbox. 1GB on Premium, 50GB on Ultra.',
    icon: Cloud,
  },
  {
    title: 'File Transfer',
    description: 'Send large attachments that would normally bounce, without a separate tool.',
    icon: FileUp,
  },
  {
    title: 'Tasks',
    description: 'Turn an email into a to-do and track it without leaving your inbox.',
    icon: CheckSquare,
  },
  {
    title: 'AI Smart Write',
    description: 'Draft, rewrite and tidy up emails with AI assistance.',
    icon: Sparkles,
  },
];

export function EmailAdvancedTools() {
  return (
    <section className="py-20 lg:py-28 bg-[#F2F2ED] border-t border-[#E4E4DC]">
      <div className="container mx-auto px-siteContainer">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A1616] mb-4">
            More room, more tools, as you move up
          </h2>
          <p className="text-base sm:text-lg text-[#455A58] leading-relaxed">
            Every plan covers the essentials. The higher plans add storage and a few tools worth having.
          </p>
        </div>

        {/* 5-Card Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advancedTools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E4E4DC] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#082615]/30 hover:shadow-md transition-all shadow-sm group"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#082615] text-[#46FDAE] mb-6 shadow-sm group-hover:scale-105 transition-transform">
                    <Icon className="h-6 w-6 stroke-[2]" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#0A1616] mb-2">{tool.title}</h3>
                  <p className="text-sm text-[#455A58] leading-relaxed">{tool.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
