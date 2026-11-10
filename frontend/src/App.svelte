<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { HandleIn1Out1 } from "../wailsjs/go/main/App";

  let in1 = $state("");
  let out1 = $state("");

  async function convert() {
    if (!in1) return;
    try {
      out1 = await HandleIn1Out1(in1);
    } catch (e) {
      console.error(e);
    }
  }

</script>

<main class="p-8 bg-background text-foreground min-h-screen">
  <div class="max-w-4xl mx-auto space-y-8">
    <h1 class="text-4xl font-bold text-center">Wails + Svelte 5 + TailwindCSS 4 + shadcn-svelte</h1>
    
    <Card class="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Welcome!</CardTitle>
        <CardDescription>Your shadcn-svelte setup is working perfectly</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <p class="text-muted-foreground">
          This demonstrates that Svelte 5, TailwindCSS 4, and shadcn-svelte are all configured correctly.
        </p>
        <div class="flex gap-2">
          <Button variant="default">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
        <p class="text-muted-foreground">
          And this demonstrates that Wails is interacting correctly between front end and a go function in back end.
          </p>
          <Label for="in1">Input to back end</Label>
          <div class="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" id="in1" placeholder="Type something in mixed case..." bind:value={in1} />
            <Button onclick={convert}>Submit</Button>
          </div>
        {#if out1}
          <div class="space-y-2">
            <Label for="out1">Output from back end, which forced it to upper case...</Label>
            <div class="p-4 rounded-md border bg-muted text-muted-foreground font-mono" id="out1">
              {out1}
            </div>
          </div>
        {/if}
      </CardContent>
    </Card>
    
    <div class="text-center">
      <p class="text-lg text-muted-foreground">
        Ready to build beautiful UIs with modern tools! 🎉
      </p>
    </div>
  </div>
</main>

<style>
</style>
