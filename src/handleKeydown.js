import { route } from './App.vue';

export function handleKeydown(e) {
Console.log('>handleKeydown', e);
if (e.code === 'Space') {
if (e.target.tagName === 'INPUT')
return false;
if (route.name === "mv") return false;
e.preventDefault();
player.playOrPause();
}
}
