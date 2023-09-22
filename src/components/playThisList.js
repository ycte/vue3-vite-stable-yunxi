import { props, playThisListDefault } from './TrackList.vue';

export function playThisList(trackID) {
if (props.dbclickTrackFunc === 'default') {
playThisListDefault(trackID);
}
else if (props.dbclickTrackFunc === 'none') {
// do nothing
}
else if (props.dbclickTrackFunc === 'playTrackOnListByID') {
player.value.player.playTrackOnListByID(trackID);
}
else if (props.dbclickTrackFunc === 'playPlaylistByID') {
player.value.player.playPlaylistByID(props.id, trackID);
}
else if (props.dbclickTrackFunc === 'playAList') {
const trackIDs = props.tracks.map((t) => t.id || t.songId);
this.player.replacePlaylist(trackIDs, this.id, "artist", trackID);
} else if (this.dbclickTrackFunc === "dailyTracks") {
let trackIDs = this.tracks.map((t) => t.id);
this.player.replacePlaylist(trackIDs, "/daily/songs", "url", trackID);
} else if (this.dbclickTrackFunc === "playCloudDisk") {
let trackIDs = this.tracks.map((t) => t.id || t.songId);
this.player.replacePlaylist(trackIDs, this.id, "cloudDisk", trackID);
}
}
