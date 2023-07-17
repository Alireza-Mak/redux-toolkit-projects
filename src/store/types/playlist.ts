export interface PlaylistItemType {
  id: string;
  label: string;
}
export type AddPlaylistAction = {
  type: string;
  payload: PlaylistItemType;
};
export type RemovePlaylistAction = {
  type: string;
  payload: string;
};
export type PlaylistType = PlaylistItemType[];
