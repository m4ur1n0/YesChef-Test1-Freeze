const sector_flow_api_key = import.meta.env.VITE_APP_SECTORFLOW_KEY1;
const workspaces_url = `https://platform.sectorflow.ai/api/v1/workspaces`;
const default_headers = {
    'Authorization': `Bearer ${sector_flow_api_key}`,
};
function handleErr(err, message) {
    console.error(`ERROR (${err}) OCCURRED WITH MESSAGE (${message})`);
    return {
        code: 500,
        err: err,
        message: message
    };
}
export async function getAllWorkspaces() {
    try {
        const resp = await fetch(workspaces_url, {
            method: "GET",
            headers: default_headers,
        });
        if (!resp.ok) {
            throw new Error("Workspaces get returned non-ok code.");
        }
        const data = await resp.json();
        return {
            code: 200,
            data: data
        };
    }
    catch (err) {
        return handleErr(err, "Failed to fetch all workspaces associated with account");
    }
}
export async function createNewWorkspaceForUser(userId, modelIds) {
    try {
        const resp = await fetch(workspaces_url, {
            method: 'POST',
            headers: default_headers,
            body: JSON.stringify({
                name: `${userId} workspace`,
                modelIds: modelIds,
                chatHistoryType: "PRIVATE",
                contextType: "PRIVATE",
                sharingType: "PRIVATE",
            })
        });
        if (!resp.ok) {
            throw new Error("Workspace creation request returned non-ok code.");
        }
        const data = await resp.json();
        return {
            code: 200,
            data: data
        };
    }
    catch (err) {
        return handleErr(err, `Failed to create new workspace for user ${userId}`);
    }
}
