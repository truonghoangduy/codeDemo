import { createReducer, on, State } from '@ngrx/store';
import * as photoActions from '../actions/photo.action';
import { Photo } from '../../models/photo.model';
import { ListOfPhoto } from '../../models/photos.model';
import { Action } from 'rxjs/internal/scheduler/Action';


export const initialState: ListOfPhoto = {
    photos:[],
};

export const initialPhoto:Photo = {
    id:"123",
    url:"https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
    name:"Dog",
    like:0,
    comment:["Nice Dog","sdaf"],
};


const _photoreducer = createReducer(initialState,
    on(photoActions.add, (state,action) => {
        // let newPhoto = [<Photo> action];
        // if (newPhoto[0].id != null) {
        //     newPhoto[0].id = new Date().toUTCString();
        // }

        var mergeObject = Object.assign({},state,{
            photos:state.photos.concat(action)
        });
        console.log(mergeObject)
        return mergeObject;
    }),
    // on(photoActions.like,)

);

export function photoReducer(state = initialState, action) {
    return _photoreducer(state, action);
}