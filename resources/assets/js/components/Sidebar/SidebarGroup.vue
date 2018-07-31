<template>
    <div class="text-left p-4">
        <span class="font-bold underline">
            {{name}}
        </span>
        <ul class="list-reset pl-4 pt-2">
            <li v-for="(item, index) in items" v-bind:key="index"><a class="pt-2 no-underline text-white" :href="item.data.attrs.href">{{item.children[0].text}}</a></li>
        </ul>
    </div>
</template>

<script>
/**
 * Sidebar group
 * 
 * This component will slot <a> tags into a list using the slotted native <a> tag href for navigation.
 * This must be nested inside a SidebarItem Component
 * 
 * Ex: 
 * <sidebar>
 *      <sidebar-item svg="M20 14v4a2 2 0 0 1-2 2h-4v-2a2 2 0 0 0-2-2..." name="Devices">
 *          <sidebar-group name="group list">
 *              <a href="/hello">World</a>
 *              <a href="/foo">Bar</a>
 *          </sidebar-group>
 *      </sidebar-item>
 * </sidebar>
 */
export default {
    /**
     * @param string name The name of the group
     */
    props: ['name'],
    data() {
        return {
            active: true,
            items: this.$slots.default.filter(vnode => vnode.tag == 'a')
        }
    }
}
</script>

<style>

</style>
