export default await (async () => {
const __VLS_setup = async () => {
defineProps<{
msg: string;
}>();
const __VLS_Component = (await import('vue')).defineComponent({
props: ({} as __VLS_TypePropsToRuntimeProps<{
msg: string;
}>),
setup() {
return {};
},
});
function __VLS_template() {
import * as __VLS_types from './__VLS_types.js';
const __VLS_types: typeof import('./__VLS_types.js');

const __VLS_options = {};

let __VLS_name!: 'HelloWorld';
let __VLS_ctx!: __VLS_types.PickNotAny<__VLS_Ctx, {}> & InstanceType<__VLS_types.PickNotAny<typeof __VLS_Component, new () => {}>> & InstanceType<__VLS_types.PickNotAny<typeof __VLS_component, new () => {}>> & {};
let __VLS_vmUnwrap!: typeof __VLS_options & { components: {}; };
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_component extends { components: infer C; } ? C : {}> & __VLS_types.GlobalComponents & typeof __VLS_vmUnwrap.components & __VLS_types.PickComponents<typeof __VLS_ctx>;
let __VLS_selfComponent!: __VLS_types.SelfComponent<typeof __VLS_name, typeof __VLS_component & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_selfComponent, keyof typeof __VLS_otherComponents>;
__VLS_components. /* __VLS_.SearchTexts.Components */;
({} as __VLS_types.GlobalAttrs). /* __VLS_.SearchTexts.GlobalAttrs */;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'greetings'?: boolean; } &
{ 'greetings'?: boolean; } &
{ 'greetings'?: boolean; } &
{ 'greetings'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
{
<div class={"\u0067\u0072\u0065\u0065\u0074\u0069\u006e\u0067\u0073"}></div>;
{
<h1 class={"\u0067\u0072\u0065\u0065\u006e"}></h1>;
(__VLS_ctx.msg);
[msg,];
}
{
<h3></h3>;
{
<a target={"\u005f\u0062\u006c\u0061\u006e\u006b"} href={"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0076\u0069\u0074\u0065\u006a\u0073\u002e\u0064\u0065\u0076\u002f"}></a>;
}
{
<a target={"\u005f\u0062\u006c\u0061\u006e\u006b"} href={"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0076\u0075\u0065\u006a\u0073\u002e\u006f\u0072\u0067\u002f"}></a>;
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses['greetings'];
__VLS_styleScopedClasses['green'];
}
declare var __VLS_slots: {};
return __VLS_slots;
}
const __VLS_component = (await import('vue')).defineComponent({
setup() {
return {};
},
});
return {} as typeof __VLS_Component & (new () => { $slots: ReturnType<typeof __VLS_template>; });
};
return await __VLS_setup();
})();
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
[K in keyof T]-?: {} extends Pick<T, K> ? { type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>; } : { type: import('vue').PropType<T[K]>; required: true; };
};
