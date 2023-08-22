<script>
    import "../app.css";
    import Sidebarnav from "./components/nav/SidebarNav.component.svelte";
</script>

<div class="h-screen max-h-screen flex">
    <Sidebarnav/>

    <!-- main content -->
    <div class="flex items-stretch w-[80vw]">
        <slot />
    </div>
    
    <!-- logo and meta -->
    <div class="h-screen flex flex-col pt-10 p-2 border">
        <h1>Glitxz</h1>
        <p>High impact art, fashion, and gaming.</p>
    </div>      
</div>
