function searchResults() { return JSON.stringify([]); }
function extractDetails() { return JSON.stringify([{ description: "Local file", aliases: "", airdate: "" }]); }
function extractEpisodes() { return JSON.stringify([]); }
// The bridge: echo the opaque handle the app passed in, back to the app.
function extractStreamUrl(handle) {
  return JSON.stringify({ streams: [{ title: "Local File", streamUrl: handle, headers: {} }] });
}
