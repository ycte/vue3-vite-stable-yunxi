import SvgIcon from '../components/SvgIcon.vue';
import ButtonTwoTone from '@/components/ButtonTwoTone.vue';
import Cover from '@/components/Cover.vue';
import TrackList from '@/components/TrackList.vue';
import { __VLS_publicComponent, __VLS_internalComponent, __VLS_componentsOption, __VLS_name, show, specialPlaylistInfo, isLikeSongsPage, playlist, openMenu, toggleFullDescription, playPlaylistByID, likePlaylist, inputFocus, displaySearchInPlaylist, inputSearchKeyWords, inputDebounce, searchInPlaylist, searchInputWidth, filteredTracks, isUserOwnPlaylist } from './PlaylistView.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'playlist'?: boolean; } &
{ 'playlist-info'?: boolean; } &
{ 'info'?: boolean; } &
{ 'title'?: boolean; } &
{ 'lock-icon'?: boolean; } &
{ 'svg-icon'?: boolean; } &
{ 'artist'?: boolean; } &
{ 'date-and-count'?: boolean; } &
{ 'description'?: boolean; } &
{ 'buttons'?: boolean; } &
{ 'special-playlist'?: boolean; } &
{ 'title'?: boolean; } &
{ 'subtitle'?: boolean; } &
{ 'buttons'?: boolean; } &
{ 'gradient-test'?: boolean; } &
{ 'gradient-radar'?: boolean; } &
{ 'gradient-radar'?: boolean; } &
{ 'gradient-blue-purple'?: boolean; } &
{ 'gradient-sharp-blue'?: boolean; } &
{ 'gradient-yellow-pink'?: boolean; } &
{ 'gradient-pink'?: boolean; } &
{ 'gradient-indigo-pink-yellow'?: boolean; } &
{ 'gradient-light-red-light-blue'?: boolean; } &
{ 'gradient-fog'?: boolean; } &
{ 'gradient-red'?: boolean; } &
{ 'gradient-sky-blue'?: boolean; } &
{ 'gradient-dark-blue-midnight-blue'?: boolean; } &
{ 'gradient-yellow-red'?: boolean; } &
{ 'gradient-yellow'?: boolean; } &
{ 'gradient-midnight-blue'?: boolean; } &
{ 'gradient-orange-red'?: boolean; } &
{ 'gradient-moonstone-blue'?: boolean; } &
{ 'gradient-pink-purple-blue'?: boolean; } &
{ 'gradient-green'?: boolean; } &
{ 'user-info'?: boolean; } &
{ 'avatar'?: boolean; } &
{ 'search-box'?: boolean; } &
{ 'container'?: boolean; } &
{ 'svg-icon'?: boolean; } &
{ 'active'?: boolean; } &
{ 'svg-icon'?: boolean; } &
{ 'search-box'?: boolean; } &
{ 'active'?: boolean; } &
{ 'svg-icon'?: boolean; } &
{ 'search-box-likepage'?: boolean; } &
{ 'input'?: boolean; } &
{ 'container'?: boolean; } &
{ 'svg-icon'?: boolean; } &
{ 'active'?: boolean; } &
{ 'svg-icon'?: boolean; } &
{ 'search-box-likepage'?: boolean; } &
{ 'active'?: boolean; } &
{ 'svg-icon'?: boolean; } &
{ 'search-box-likepage'?: boolean; } &
{ 'load-more'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'Cover', typeof __VLS_localComponents, "Cover", "Cover", "Cover"> &
__VLS_WithComponent<'SvgIcon', typeof __VLS_localComponents, "SvgIcon", "SvgIcon", "SvgIcon"> &
__VLS_WithComponent<'ButtonTwoTone', typeof __VLS_localComponents, "ButtonTwoTone", "ButtonTwoTone", "ButtonTwoTone"> &
__VLS_WithComponent<'TrackList', typeof __VLS_localComponents, "TrackList", "TrackList", "TrackList">;
({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
__VLS_components.Cover;
// @ts-ignore
[Cover,];
__VLS_components.SvgIcon; __VLS_components.SvgIcon; __VLS_components.SvgIcon;
// @ts-ignore
[SvgIcon, SvgIcon, SvgIcon,];
({} as __VLS_IntrinsicElements).a; ({} as __VLS_IntrinsicElements).a;
__VLS_components.ButtonTwoTone; __VLS_components.ButtonTwoTone; __VLS_components.ButtonTwoTone; __VLS_components.ButtonTwoTone; __VLS_components.ButtonTwoTone; __VLS_components.ButtonTwoTone; __VLS_components.ButtonTwoTone; __VLS_components.ButtonTwoTone;
// @ts-ignore
[ButtonTwoTone, ButtonTwoTone, ButtonTwoTone, ButtonTwoTone, ButtonTwoTone, ButtonTwoTone, ButtonTwoTone, ButtonTwoTone,];
({} as __VLS_IntrinsicElements).input; ({} as __VLS_IntrinsicElements).input; ({} as __VLS_IntrinsicElements).input; ({} as __VLS_IntrinsicElements).input;
({} as __VLS_IntrinsicElements).img; ({} as __VLS_IntrinsicElements).img;
({} as __VLS_IntrinsicElements).h1; ({} as __VLS_IntrinsicElements).h1;
__VLS_components.TrackList;
// @ts-ignore
[TrackList,];
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
(__VLS_3.slots!).default;
}
{
const __VLS_4 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_5 = __VLS_elementAsFunctionalComponent(__VLS_4);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_6 = __VLS_5({ ...{}, class: ("playlist"), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4, typeof __VLS_6> & Record<string, unknown>) => void)({ ...{}, class: ("playlist"), });
const __VLS_7 = __VLS_pickFunctionalComponentCtx(__VLS_4, __VLS_6)!;
__VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.show));
if (__VLS_ctx.specialPlaylistInfo === undefined && !__VLS_ctx.isLikeSongsPage) {
{
const __VLS_8 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_9 = __VLS_elementAsFunctionalComponent(__VLS_8);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_10 = __VLS_9({ ...{}, class: ("playlist-info"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_8, typeof __VLS_10> & Record<string, unknown>) => void)({ ...{}, class: ("playlist-info"), });
const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10)!;
{
let __VLS_12!: 'Cover' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Cover : (typeof __VLS_resolvedLocalAndGlobalComponents)['Cover'];
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ onClick: {} as any, }, id: ((__VLS_ctx.playlist.id)), imageUrl: ((__VLS_ctx.playlist.coverImgUrl)), showPlayButton: ((true)), alwaysShowShadow: ((true)), clickCoverToPlay: ((true)), fixedSize: ((200)), type: ("playlist"), coverHover: ((false)), playButtonSize: ((18)), style: ({}), }));
({} as { Cover: typeof __VLS_12; }).Cover;
const __VLS_14 = __VLS_13({ ...{ onClick: {} as any, }, id: ((__VLS_ctx.playlist.id)), imageUrl: ((__VLS_ctx.playlist.coverImgUrl)), showPlayButton: ((true)), alwaysShowShadow: ((true)), clickCoverToPlay: ((true)), fixedSize: ((200)), type: ("playlist"), coverHover: ((false)), playButtonSize: ((18)), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_12, typeof __VLS_14> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, id: ((__VLS_ctx.playlist.id)), imageUrl: ((__VLS_ctx.playlist.coverImgUrl)), showPlayButton: ((true)), alwaysShowShadow: ((true)), clickCoverToPlay: ((true)), fixedSize: ((200)), type: ("playlist"), coverHover: ((false)), playButtonSize: ((18)), style: ({}), });
const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14)!;
let __VLS_16 = { 'click': __VLS_pickEvent(__VLS_15.emit!, 'click' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_13, typeof __VLS_14>).onClick) };
__VLS_16 = {
click: (__VLS_ctx.openMenu)
};
}
{
const __VLS_17 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_18 = __VLS_elementAsFunctionalComponent(__VLS_17);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_19 = __VLS_18({ ...{}, class: ("info"), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_17, typeof __VLS_19> & Record<string, unknown>) => void)({ ...{}, class: ("info"), });
const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19)!;
{
const __VLS_21 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_22 = __VLS_elementAsFunctionalComponent(__VLS_21);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_23 = __VLS_22({ ...{ onClick: {} as any, }, class: ("title"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_21, typeof __VLS_23> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("title"), });
const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23)!;
let __VLS_25 = { 'click': __VLS_pickEvent(__VLS_24.emit!, 'click' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_22, typeof __VLS_23>).onClick) };
__VLS_25 = {
click: (__VLS_ctx.openMenu)
};
if (__VLS_ctx.playlist.privacy === 10) {
{
const __VLS_26 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_27 = __VLS_elementAsFunctionalComponent(__VLS_26);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_28 = __VLS_27({ ...{}, class: ("lock-icon"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_28> & Record<string, unknown>) => void)({ ...{}, class: ("lock-icon"), });
const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!;
{
let __VLS_30!: 'SvgIcon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.SvgIcon : (typeof __VLS_resolvedLocalAndGlobalComponents)['SvgIcon'];
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, name: ("lock"), }));
({} as { SvgIcon: typeof __VLS_30; }).SvgIcon;
const __VLS_32 = __VLS_31({ ...{}, name: ("lock"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, name: ("lock"), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
}
(__VLS_29.slots!).default;
}
// @ts-ignore
[show, specialPlaylistInfo, isLikeSongsPage, playlist, playlist, playlist, playlist, playlist, playlist, openMenu, openMenu, playlist,];
}
(__VLS_ctx.playlist.name);
(__VLS_24.slots!).default;
}
{
const __VLS_34 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_35 = __VLS_elementAsFunctionalComponent(__VLS_34);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_36 = __VLS_35({ ...{}, class: ("artist"), }, ...__VLS_functionalComponentArgsRest(__VLS_35));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_34, typeof __VLS_36> & Record<string, unknown>) => void)({ ...{}, class: ("artist"), });
const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_34, __VLS_36)!;
if ([
5277771961, 5277965913, 5277969451, 5277778542, 5278068783,
].includes(__VLS_ctx.playlist.id)) {
{
const __VLS_38 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_39 = __VLS_elementAsFunctionalComponent(__VLS_38);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_40 = __VLS_39({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_38, typeof __VLS_40> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40)!;
(__VLS_41.slots!).default;
}
// @ts-ignore
[playlist, playlist,];
}
else {
{
const __VLS_42 = ({} as __VLS_IntrinsicElements)["a"];
const __VLS_43 = __VLS_elementAsFunctionalComponent(__VLS_42);
({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).a;
const __VLS_44 = __VLS_43({ ...{}, target: ("blank"), style: ({}), href: ((`https://music.163.com/#/user/home?id=${__VLS_ctx.playlist.creator.userId}`)), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_42, typeof __VLS_44> & Record<string, unknown>) => void)({ ...{}, target: ("blank"), style: ({}), href: ((`https://music.163.com/#/user/home?id=${__VLS_ctx.playlist.creator.userId}`)), });
const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44)!;
(__VLS_ctx.playlist.creator.nickname);
(__VLS_45.slots!).default;
}
// @ts-ignore
[playlist, playlist, playlist,];
}
(__VLS_37.slots!).default;
}
{
const __VLS_46 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_48 = __VLS_47({ ...{}, class: ("date-and-count"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{}, class: ("date-and-count"), });
const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
(__VLS_ctx.$t('playlist.updatedAt'));
(__VLS_ctx.playlist.updateTime);
(__VLS_ctx.playlist.trackCount);
(__VLS_ctx.$t('common.songs'));
(__VLS_49.slots!).default;
}
{
const __VLS_50 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_52 = __VLS_51({ ...{ onClick: {} as any, }, class: ("description"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("description"), });
const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
let __VLS_54 = { 'click': __VLS_pickEvent(__VLS_53.emit!, 'click' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_51, typeof __VLS_52>).onClick) };
__VLS_54 = {
click: (__VLS_ctx.toggleFullDescription)
};
(__VLS_ctx.playlist.description);
(__VLS_53.slots!).default;
}
{
const __VLS_55 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_57 = __VLS_56({ ...{}, class: ("buttons"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{}, class: ("buttons"), });
const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
{
let __VLS_59!: 'ButtonTwoTone' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ButtonTwoTone : (typeof __VLS_resolvedLocalAndGlobalComponents)['ButtonTwoTone'];
const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({ ...{ onClick: {} as any, }, iconClass: ("play"), backgroundColor: ((1 === 1 ? '#FFDFDFDF' : '')), }));
({} as { ButtonTwoTone: typeof __VLS_59; }).ButtonTwoTone;
({} as { ButtonTwoTone: typeof __VLS_59; }).ButtonTwoTone;
const __VLS_61 = __VLS_60({ ...{ onClick: {} as any, }, iconClass: ("play"), backgroundColor: ((1 === 1 ? '#FFDFDFDF' : '')), }, ...__VLS_functionalComponentArgsRest(__VLS_60));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_59, typeof __VLS_61> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, iconClass: ("play"), backgroundColor: ((1 === 1 ? '#FFDFDFDF' : '')), });
const __VLS_62 = __VLS_pickFunctionalComponentCtx(__VLS_59, __VLS_61)!;
let __VLS_63 = { 'click': __VLS_pickEvent(__VLS_62.emit!, 'click' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_61>).onClick) };
__VLS_63 = {
click: $event => {
if (!((__VLS_ctx.specialPlaylistInfo === undefined && !__VLS_ctx.isLikeSongsPage))) return;
__VLS_ctx.playPlaylistByID();
}
};
(__VLS_ctx.$t('common.play'));
(__VLS_62.slots!).default;
}
if (__VLS_ctx.playlist.creator.userId !== __VLS_ctx.data.user.userId) {
{
let __VLS_64!: 'ButtonTwoTone' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ButtonTwoTone : (typeof __VLS_resolvedLocalAndGlobalComponents)['ButtonTwoTone'];
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({ ...{ onClick: {} as any, }, iconClass: ((__VLS_ctx.playlist.subscribed ? 'heart-solid' : 'heart')), iconButton: ((true)), horizontalPadding: ((0)), color: ((__VLS_ctx.playlist.subscribed ? 'blue' : 'grey')), textColor: ((__VLS_ctx.playlist.subscribed ? '#F04A3A' : '')), }));
({} as { ButtonTwoTone: typeof __VLS_64; }).ButtonTwoTone;
const __VLS_66 = __VLS_65({ ...{ onClick: {} as any, }, iconClass: ((__VLS_ctx.playlist.subscribed ? 'heart-solid' : 'heart')), iconButton: ((true)), horizontalPadding: ((0)), color: ((__VLS_ctx.playlist.subscribed ? 'blue' : 'grey')), textColor: ((__VLS_ctx.playlist.subscribed ? '#F04A3A' : '')), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_64, typeof __VLS_66> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, iconClass: ((__VLS_ctx.playlist.subscribed ? 'heart-solid' : 'heart')), iconButton: ((true)), horizontalPadding: ((0)), color: ((__VLS_ctx.playlist.subscribed ? 'blue' : 'grey')), textColor: ((__VLS_ctx.playlist.subscribed ? '#F04A3A' : '')), });
const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66)!;
let __VLS_68 = { 'click': __VLS_pickEvent(__VLS_67.emit!, 'click' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_65, typeof __VLS_66>).onClick) };
__VLS_68 = {
click: (__VLS_ctx.likePlaylist)
};
}
// @ts-ignore
[$t, playlist, playlist, $t, toggleFullDescription, playlist, playPlaylistByID, $t, playlist, data, playlist, playlist, playlist, playlist, playlist, playlist, playlist, playlist, playlist, likePlaylist,];
}
{
let __VLS_69!: 'ButtonTwoTone' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ButtonTwoTone : (typeof __VLS_resolvedLocalAndGlobalComponents)['ButtonTwoTone'];
const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({ ...{ onClick: {} as any, }, iconClass: ("more"), iconButton: ((true)), horizontalPadding: ((0)), color: ("grey"), }));
({} as { ButtonTwoTone: typeof __VLS_69; }).ButtonTwoTone;
const __VLS_71 = __VLS_70({ ...{ onClick: {} as any, }, iconClass: ("more"), iconButton: ((true)), horizontalPadding: ((0)), color: ("grey"), }, ...__VLS_functionalComponentArgsRest(__VLS_70));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_69, typeof __VLS_71> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, iconClass: ("more"), iconButton: ((true)), horizontalPadding: ((0)), color: ("grey"), });
const __VLS_72 = __VLS_pickFunctionalComponentCtx(__VLS_69, __VLS_71)!;
let __VLS_73 = { 'click': __VLS_pickEvent(__VLS_72.emit!, 'click' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_70, typeof __VLS_71>).onClick) };
__VLS_73 = {
click: (__VLS_ctx.openMenu)
};
}
(__VLS_58.slots!).default;
}
(__VLS_20.slots!).default;
}
if (__VLS_ctx.displaySearchInPlaylist) {
{
const __VLS_74 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_75 = __VLS_elementAsFunctionalComponent(__VLS_74);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_76 = __VLS_75({ ...{}, class: ("search-box"), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_74, typeof __VLS_76> & Record<string, unknown>) => void)({ ...{}, class: ("search-box"), });
const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76)!;
{
const __VLS_78 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_79 = __VLS_elementAsFunctionalComponent(__VLS_78);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_80 = __VLS_79({ ...{}, class: ("container"), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_78, typeof __VLS_80> & Record<string, unknown>) => void)({ ...{}, class: ("container"), });
const __VLS_81 = __VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80)!;
({ active: __VLS_ctx.inputFocus });
__VLS_styleScopedClasses = ({ active: inputFocus });
{
let __VLS_82!: 'SvgIcon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.SvgIcon : (typeof __VLS_resolvedLocalAndGlobalComponents)['SvgIcon'];
const __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({ ...{}, name: ("search"), }));
({} as { SvgIcon: typeof __VLS_82; }).SvgIcon;
const __VLS_84 = __VLS_83({ ...{}, name: ("search"), }, ...__VLS_functionalComponentArgsRest(__VLS_83));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_82, typeof __VLS_84> & Record<string, unknown>) => void)({ ...{}, name: ("search"), });
const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_82, __VLS_84)!;
}
{
const __VLS_86 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_87 = __VLS_elementAsFunctionalComponent(__VLS_86);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_88 = __VLS_87({ ...{}, class: ("input"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_86, typeof __VLS_88> & Record<string, unknown>) => void)({ ...{}, class: ("input"), });
const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88)!;
{
const __VLS_90 = ({} as __VLS_IntrinsicElements)["input"];
const __VLS_91 = __VLS_elementAsFunctionalComponent(__VLS_90);
({} as __VLS_IntrinsicElements).input;
({} as __VLS_IntrinsicElements).input;
const __VLS_92 = __VLS_91({ ...{ onInput: {} as any, onFocus: {} as any, onBlur: {} as any, }, placeholder: ((__VLS_ctx.inputFocus ? '' : __VLS_ctx.$t('playlist.search'))), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_90, typeof __VLS_92> & Record<string, unknown>) => void)({ ...{ onInput: {} as any, onFocus: {} as any, onBlur: {} as any, }, placeholder: ((__VLS_ctx.inputFocus ? '' : __VLS_ctx.$t('playlist.search'))), });
const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92)!;
(__VLS_ctx.inputSearchKeyWords);
__VLS_directiveFunction(__VLS_ctx.vFocus)(undefined);
let __VLS_94 = { 'input': __VLS_pickEvent(__VLS_93.emit!, 'input' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_91, typeof __VLS_92>).onInput) };
__VLS_94 = {
input: $event => {
if (!((__VLS_ctx.specialPlaylistInfo === undefined && !__VLS_ctx.isLikeSongsPage))) return;
if (!((__VLS_ctx.displaySearchInPlaylist))) return;
__VLS_ctx.inputDebounce();
}
};
let __VLS_95 = { 'focus': __VLS_pickEvent(__VLS_93.emit!, 'focus' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_91, typeof __VLS_92>).onFocus) };
__VLS_95 = {
focus: $event => {
if (!((__VLS_ctx.specialPlaylistInfo === undefined && !__VLS_ctx.isLikeSongsPage))) return;
if (!((__VLS_ctx.displaySearchInPlaylist))) return;
__VLS_ctx.inputFocus = true;
}
};
let __VLS_96 = { 'blur': __VLS_pickEvent(__VLS_93.emit!, 'blur' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_91, typeof __VLS_92>).onBlur) };
__VLS_96 = {
blur: $event => {
if (!((__VLS_ctx.specialPlaylistInfo === undefined && !__VLS_ctx.isLikeSongsPage))) return;
if (!((__VLS_ctx.displaySearchInPlaylist))) return;
__VLS_ctx.inputFocus = false;
}
};
}
(__VLS_89.slots!).default;
}
(__VLS_81.slots!).default;
}
(__VLS_77.slots!).default;
}
// @ts-ignore
[openMenu, displaySearchInPlaylist, inputFocus, inputFocus, $t, inputFocus, $t, inputSearchKeyWords, inputDebounce, inputFocus, inputFocus,];
}
(__VLS_11.slots!).default;
}
}
if (__VLS_ctx.specialPlaylistInfo !== undefined) {
{
const __VLS_97 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_98 = __VLS_elementAsFunctionalComponent(__VLS_97);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_99 = __VLS_98({ ...{}, class: ("special-playlist"), }, ...__VLS_functionalComponentArgsRest(__VLS_98));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_97, typeof __VLS_99> & Record<string, unknown>) => void)({ ...{}, class: ("special-playlist"), });
const __VLS_100 = __VLS_pickFunctionalComponentCtx(__VLS_97, __VLS_99)!;
{
const __VLS_101 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_102 = __VLS_elementAsFunctionalComponent(__VLS_101);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_103 = __VLS_102({ ...{ onClick: {} as any, }, class: ("title"), }, ...__VLS_functionalComponentArgsRest(__VLS_102));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_101, typeof __VLS_103> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("title"), });
const __VLS_104 = __VLS_pickFunctionalComponentCtx(__VLS_101, __VLS_103)!;
(__VLS_ctx.specialPlaylistInfo.gradient);
__VLS_styleScopedClasses = (specialPlaylistInfo.gradient);
let __VLS_105 = { 'click': __VLS_pickEvent(__VLS_104.emit!, 'click' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_102, typeof __VLS_103>).onClick) };
__VLS_105 = {
click: (__VLS_ctx.openMenu)
};
{
const __VLS_106 = ({} as __VLS_IntrinsicElements)["img"];
const __VLS_107 = __VLS_elementAsFunctionalComponent(__VLS_106);
({} as __VLS_IntrinsicElements).img;
const __VLS_108 = __VLS_107({ ...{}, src: ((__VLS_ctx.playlist.coverImgUrl)), }, ...__VLS_functionalComponentArgsRest(__VLS_107));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_106, typeof __VLS_108> & Record<string, unknown>) => void)({ ...{}, src: ((__VLS_ctx.playlist.coverImgUrl)), });
const __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_106, __VLS_108)!;
}
(__VLS_ctx.specialPlaylistInfo.name);
(__VLS_104.slots!).default;
}
{
const __VLS_110 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_111 = __VLS_elementAsFunctionalComponent(__VLS_110);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_112 = __VLS_111({ ...{}, class: ("subtitle"), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_110, typeof __VLS_112> & Record<string, unknown>) => void)({ ...{}, class: ("subtitle"), });
const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112)!;
(__VLS_ctx.playlist.englishTitle);
(__VLS_ctx.playlist.updateFrequency);
(__VLS_113.slots!).default;
}
{
const __VLS_114 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_115 = __VLS_elementAsFunctionalComponent(__VLS_114);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_116 = __VLS_115({ ...{}, class: ("buttons"), }, ...__VLS_functionalComponentArgsRest(__VLS_115));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_114, typeof __VLS_116> & Record<string, unknown>) => void)({ ...{}, class: ("buttons"), });
const __VLS_117 = __VLS_pickFunctionalComponentCtx(__VLS_114, __VLS_116)!;
{
let __VLS_118!: 'ButtonTwoTone' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ButtonTwoTone : (typeof __VLS_resolvedLocalAndGlobalComponents)['ButtonTwoTone'];
const __VLS_119 = __VLS_asFunctionalComponent(__VLS_118, new __VLS_118({ ...{ onClick: {} as any, }, class: ("play-button"), iconClass: ("play"), color: ("grey"), }));
({} as { ButtonTwoTone: typeof __VLS_118; }).ButtonTwoTone;
({} as { ButtonTwoTone: typeof __VLS_118; }).ButtonTwoTone;
const __VLS_120 = __VLS_119({ ...{ onClick: {} as any, }, class: ("play-button"), iconClass: ("play"), color: ("grey"), }, ...__VLS_functionalComponentArgsRest(__VLS_119));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_118, typeof __VLS_120> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("play-button"), iconClass: ("play"), color: ("grey"), });
const __VLS_121 = __VLS_pickFunctionalComponentCtx(__VLS_118, __VLS_120)!;
let __VLS_122 = { 'click': __VLS_pickEvent(__VLS_121.emit!, 'click' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_119, typeof __VLS_120>).onClick) };
__VLS_122 = {
click: $event => {
if (!((__VLS_ctx.specialPlaylistInfo !== undefined))) return;
__VLS_ctx.playPlaylistByID();
}
};
(__VLS_ctx.$t('common.play'));
(__VLS_121.slots!).default;
}
if (__VLS_ctx.playlist.creator.userId !== __VLS_ctx.data.user.userId) {
{
let __VLS_123!: 'ButtonTwoTone' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ButtonTwoTone : (typeof __VLS_resolvedLocalAndGlobalComponents)['ButtonTwoTone'];
const __VLS_124 = __VLS_asFunctionalComponent(__VLS_123, new __VLS_123({
...{ onClick: {} as any, }, iconClass: ((__VLS_ctx.playlist.subscribed ? 'heart-solid' : 'heart')), iconButton: ((true)), horizontalPadding: ((0)), color: ((__VLS_ctx.playlist.subscribed ? 'blue' : 'grey')), textColor: ((__VLS_ctx.playlist.subscribed ? '#335eea' : '')), backgroundColor: ((__VLS_ctx.playlist.subscribed ? 'var(--color-secondary-bg)'
: '')),
}));
({} as { ButtonTwoTone: typeof __VLS_123; }).ButtonTwoTone;
const __VLS_125 = __VLS_124({
...{ onClick: {} as any, }, iconClass: ((__VLS_ctx.playlist.subscribed ? 'heart-solid' : 'heart')), iconButton: ((true)), horizontalPadding: ((0)), color: ((__VLS_ctx.playlist.subscribed ? 'blue' : 'grey')), textColor: ((__VLS_ctx.playlist.subscribed ? '#335eea' : '')), backgroundColor: ((__VLS_ctx.playlist.subscribed ? 'var(--color-secondary-bg)'
: '')),
}, ...__VLS_functionalComponentArgsRest(__VLS_124));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_123, typeof __VLS_125> & Record<string, unknown>) => void)({
...{ onClick: {} as any, }, iconClass: ((__VLS_ctx.playlist.subscribed ? 'heart-solid' : 'heart')), iconButton: ((true)), horizontalPadding: ((0)), color: ((__VLS_ctx.playlist.subscribed ? 'blue' : 'grey')), textColor: ((__VLS_ctx.playlist.subscribed ? '#335eea' : '')), backgroundColor: ((__VLS_ctx.playlist.subscribed ? 'var(--color-secondary-bg)'
: '')),
});
const __VLS_126 = __VLS_pickFunctionalComponentCtx(__VLS_123, __VLS_125)!;
let __VLS_127 = { 'click': __VLS_pickEvent(__VLS_126.emit!, 'click' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_124, typeof __VLS_125>).onClick) };
__VLS_127 = {
click: (__VLS_ctx.likePlaylist)
};
}
// @ts-ignore
[specialPlaylistInfo, specialPlaylistInfo, openMenu, playlist, playlist, specialPlaylistInfo, playlist, playlist, playPlaylistByID, $t, playlist, data, playlist, playlist, playlist, playlist, playlist, playlist, playlist, playlist, playlist, playlist, playlist, playlist, likePlaylist,];
}
{
let __VLS_128!: 'ButtonTwoTone' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ButtonTwoTone : (typeof __VLS_resolvedLocalAndGlobalComponents)['ButtonTwoTone'];
const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({ ...{ onClick: {} as any, }, iconClass: ("more"), iconButton: ((true)), horizontalPadding: ((0)), color: ("grey"), }));
({} as { ButtonTwoTone: typeof __VLS_128; }).ButtonTwoTone;
const __VLS_130 = __VLS_129({ ...{ onClick: {} as any, }, iconClass: ("more"), iconButton: ((true)), horizontalPadding: ((0)), color: ("grey"), }, ...__VLS_functionalComponentArgsRest(__VLS_129));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_128, typeof __VLS_130> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, iconClass: ("more"), iconButton: ((true)), horizontalPadding: ((0)), color: ("grey"), });
const __VLS_131 = __VLS_pickFunctionalComponentCtx(__VLS_128, __VLS_130)!;
let __VLS_132 = { 'click': __VLS_pickEvent(__VLS_131.emit!, 'click' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_129, typeof __VLS_130>).onClick) };
__VLS_132 = {
click: (__VLS_ctx.openMenu)
};
}
(__VLS_117.slots!).default;
}
(__VLS_100.slots!).default;
}
// @ts-ignore
[openMenu,];
}
if (__VLS_ctx.isLikeSongsPage) {
{
const __VLS_133 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_134 = __VLS_elementAsFunctionalComponent(__VLS_133);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_135 = __VLS_134({ ...{}, class: ("user-info"), }, ...__VLS_functionalComponentArgsRest(__VLS_134));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_133, typeof __VLS_135> & Record<string, unknown>) => void)({ ...{}, class: ("user-info"), });
const __VLS_136 = __VLS_pickFunctionalComponentCtx(__VLS_133, __VLS_135)!;
{
const __VLS_137 = ({} as __VLS_IntrinsicElements)["h1"];
const __VLS_138 = __VLS_elementAsFunctionalComponent(__VLS_137);
({} as __VLS_IntrinsicElements).h1;
({} as __VLS_IntrinsicElements).h1;
const __VLS_139 = __VLS_138({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_138));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_137, typeof __VLS_139> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_140 = __VLS_pickFunctionalComponentCtx(__VLS_137, __VLS_139)!;
{
const __VLS_141 = ({} as __VLS_IntrinsicElements)["img"];
const __VLS_142 = __VLS_elementAsFunctionalComponent(__VLS_141);
({} as __VLS_IntrinsicElements).img;
const __VLS_143 = __VLS_142({ ...{}, class: ("avatar"), src: ((__VLS_ctx.data.user.avatarUrl)), loading: ("lazy"), }, ...__VLS_functionalComponentArgsRest(__VLS_142));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_141, typeof __VLS_143> & Record<string, unknown>) => void)({ ...{}, class: ("avatar"), src: ((__VLS_ctx.data.user.avatarUrl)), loading: ("lazy"), });
const __VLS_144 = __VLS_pickFunctionalComponentCtx(__VLS_141, __VLS_143)!;
}
(__VLS_ctx.data.user.nickname);
(__VLS_ctx.$t('library.sLikedSongs'));
(__VLS_140.slots!).default;
}
{
const __VLS_145 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_146 = __VLS_elementAsFunctionalComponent(__VLS_145);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_147 = __VLS_146({ ...{ onClick: {} as any, }, class: ("search-box-likepage"), }, ...__VLS_functionalComponentArgsRest(__VLS_146));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_145, typeof __VLS_147> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("search-box-likepage"), });
const __VLS_148 = __VLS_pickFunctionalComponentCtx(__VLS_145, __VLS_147)!;
let __VLS_149 = { 'click': __VLS_pickEvent(__VLS_148.emit!, 'click' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_146, typeof __VLS_147>).onClick) };
__VLS_149 = {
click: $event => {
if (!((__VLS_ctx.isLikeSongsPage))) return;
__VLS_ctx.searchInPlaylist();
}
};
{
const __VLS_150 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_151 = __VLS_elementAsFunctionalComponent(__VLS_150);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_152 = __VLS_151({ ...{}, class: ("container"), }, ...__VLS_functionalComponentArgsRest(__VLS_151));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_150, typeof __VLS_152> & Record<string, unknown>) => void)({ ...{}, class: ("container"), });
const __VLS_153 = __VLS_pickFunctionalComponentCtx(__VLS_150, __VLS_152)!;
({ active: __VLS_ctx.inputFocus });
__VLS_styleScopedClasses = ({ active: inputFocus });
{
let __VLS_154!: 'SvgIcon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.SvgIcon : (typeof __VLS_resolvedLocalAndGlobalComponents)['SvgIcon'];
const __VLS_155 = __VLS_asFunctionalComponent(__VLS_154, new __VLS_154({ ...{}, name: ("search"), }));
({} as { SvgIcon: typeof __VLS_154; }).SvgIcon;
const __VLS_156 = __VLS_155({ ...{}, name: ("search"), }, ...__VLS_functionalComponentArgsRest(__VLS_155));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_154, typeof __VLS_156> & Record<string, unknown>) => void)({ ...{}, name: ("search"), });
const __VLS_157 = __VLS_pickFunctionalComponentCtx(__VLS_154, __VLS_156)!;
}
{
const __VLS_158 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_159 = __VLS_elementAsFunctionalComponent(__VLS_158);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_160 = __VLS_159({ ...{}, class: ("input"), style: (({ width: __VLS_ctx.searchInputWidth })), }, ...__VLS_functionalComponentArgsRest(__VLS_159));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_158, typeof __VLS_160> & Record<string, unknown>) => void)({ ...{}, class: ("input"), style: (({ width: __VLS_ctx.searchInputWidth })), });
const __VLS_161 = __VLS_pickFunctionalComponentCtx(__VLS_158, __VLS_160)!;
if (__VLS_ctx.displaySearchInPlaylist) {
{
const __VLS_162 = ({} as __VLS_IntrinsicElements)["input"];
const __VLS_163 = __VLS_elementAsFunctionalComponent(__VLS_162);
({} as __VLS_IntrinsicElements).input;
({} as __VLS_IntrinsicElements).input;
const __VLS_164 = __VLS_163({ ...{ onInput: {} as any, onFocus: {} as any, onBlur: {} as any, }, placeholder: ((__VLS_ctx.inputFocus ? '' : __VLS_ctx.$t('playlist.search'))), }, ...__VLS_functionalComponentArgsRest(__VLS_163));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_162, typeof __VLS_164> & Record<string, unknown>) => void)({ ...{ onInput: {} as any, onFocus: {} as any, onBlur: {} as any, }, placeholder: ((__VLS_ctx.inputFocus ? '' : __VLS_ctx.$t('playlist.search'))), });
const __VLS_165 = __VLS_pickFunctionalComponentCtx(__VLS_162, __VLS_164)!;
(__VLS_ctx.inputSearchKeyWords);
__VLS_directiveFunction(__VLS_ctx.vFocus)(undefined);
let __VLS_166 = { 'input': __VLS_pickEvent(__VLS_165.emit!, 'input' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_163, typeof __VLS_164>).onInput) };
__VLS_166 = {
input: $event => {
if (!((__VLS_ctx.isLikeSongsPage))) return;
if (!((__VLS_ctx.displaySearchInPlaylist))) return;
__VLS_ctx.inputDebounce();
}
};
let __VLS_167 = { 'focus': __VLS_pickEvent(__VLS_165.emit!, 'focus' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_163, typeof __VLS_164>).onFocus) };
__VLS_167 = {
focus: $event => {
if (!((__VLS_ctx.isLikeSongsPage))) return;
if (!((__VLS_ctx.displaySearchInPlaylist))) return;
__VLS_ctx.inputFocus = true;
}
};
let __VLS_168 = { 'blur': __VLS_pickEvent(__VLS_165.emit!, 'blur' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_163, typeof __VLS_164>).onBlur) };
__VLS_168 = {
blur: $event => {
if (!((__VLS_ctx.isLikeSongsPage))) return;
if (!((__VLS_ctx.displaySearchInPlaylist))) return;
__VLS_ctx.inputFocus = false;
}
};
}
// @ts-ignore
[isLikeSongsPage, data, data, data, $t, searchInPlaylist, inputFocus, searchInputWidth, searchInputWidth, displaySearchInPlaylist, inputFocus, $t, inputFocus, $t, inputSearchKeyWords, inputDebounce, inputFocus, inputFocus,];
}
(__VLS_161.slots!).default;
}
(__VLS_153.slots!).default;
}
(__VLS_148.slots!).default;
}
(__VLS_136.slots!).default;
}
}
{
let __VLS_169!: 'TrackList' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.TrackList : (typeof __VLS_resolvedLocalAndGlobalComponents)['TrackList'];
const __VLS_170 = __VLS_asFunctionalComponent(__VLS_169, new __VLS_169({
...{}, id: ((__VLS_ctx.playlist.id)), tracks: ((__VLS_ctx.filteredTracks)), type: ("playlist"), extraContextMenuItem: ((__VLS_ctx.isUserOwnPlaylist
? ['removeTrackFromPlaylist'] : [])),
}));
({} as { TrackList: typeof __VLS_169; }).TrackList;
const __VLS_171 = __VLS_170({
...{}, id: ((__VLS_ctx.playlist.id)), tracks: ((__VLS_ctx.filteredTracks)), type: ("playlist"), extraContextMenuItem: ((__VLS_ctx.isUserOwnPlaylist
? ['removeTrackFromPlaylist'] : [])),
}, ...__VLS_functionalComponentArgsRest(__VLS_170));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_169, typeof __VLS_171> & Record<string, unknown>) => void)({
...{}, id: ((__VLS_ctx.playlist.id)), tracks: ((__VLS_ctx.filteredTracks)), type: ("playlist"), extraContextMenuItem: ((__VLS_ctx.isUserOwnPlaylist
? ['removeTrackFromPlaylist'] : [])),
});
const __VLS_172 = __VLS_pickFunctionalComponentCtx(__VLS_169, __VLS_171)!;
}
(__VLS_7.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["playlist"];
__VLS_styleScopedClasses["playlist-info"];
__VLS_styleScopedClasses["info"];
__VLS_styleScopedClasses["title"];
__VLS_styleScopedClasses["lock-icon"];
__VLS_styleScopedClasses["artist"];
__VLS_styleScopedClasses["date-and-count"];
__VLS_styleScopedClasses["description"];
__VLS_styleScopedClasses["buttons"];
__VLS_styleScopedClasses["search-box"];
__VLS_styleScopedClasses["container"];
__VLS_styleScopedClasses["input"];
__VLS_styleScopedClasses["special-playlist"];
__VLS_styleScopedClasses["title"];
__VLS_styleScopedClasses["subtitle"];
__VLS_styleScopedClasses["buttons"];
__VLS_styleScopedClasses["play-button"];
__VLS_styleScopedClasses["user-info"];
__VLS_styleScopedClasses["avatar"];
__VLS_styleScopedClasses["search-box-likepage"];
__VLS_styleScopedClasses["container"];
__VLS_styleScopedClasses["input"];
}
var __VLS_slots!: {};
// @ts-ignore
[playlist, filteredTracks, isUserOwnPlaylist, playlist, filteredTracks, isUserOwnPlaylist, playlist, filteredTracks, isUserOwnPlaylist,];
return __VLS_slots;
}
