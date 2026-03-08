import { workspace } from "vscode";

export const CONTINUE_WORKSPACE_KEY = "genedis";
export const LEGACY_CONTINUE_WORKSPACE_KEY = "continue";

export function getContinueWorkspaceConfig() {
  // Privilégie la nouvelle clé, fallback sur l'ancienne
  const config = workspace.getConfiguration(CONTINUE_WORKSPACE_KEY);
  if (Object.keys(config).length === 0) {
    return workspace.getConfiguration(LEGACY_CONTINUE_WORKSPACE_KEY);
  }
  return config;
}
