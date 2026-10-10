import { createFileRoute } from "@tanstack/react-router";
import { OpsBoard } from "@/components/ops-board";

type OpsSearch = { loc?: string };

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): OpsSearch => {
    const loc = typeof search.loc === "string" ? search.loc : undefined;
    return loc ? { loc } : {};
  },
  component: BoardPage,
});

function BoardPage() {
  return <OpsBoard />;
}
