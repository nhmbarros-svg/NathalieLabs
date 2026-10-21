<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Brand colours are defined once in `src/styles.css` (`:root` tokens derived from the logo); components use semantic tokens only, never hex/rgba values — so a palette change touches one file.
- Binary media the app serves goes through Lovable Assets `.asset.json` pointers instead of committed binaries — keeps the repo light and delivery on the CDN.
