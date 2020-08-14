import { createAction, props } from '@ngrx/store';
import { ListOfPhoto } from '../../models/photos.model';
import { Photo } from '../../models/photo.model';
export const add = createAction('[Photo Component] Add New Photo', props<Photo>());
export const addComment = createAction('[Photo Component] Add Comment');
export const like = createAction('[Photo Component] Like');