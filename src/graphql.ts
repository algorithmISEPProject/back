
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateEventInput {
    exampleField?: Nullable<number>;
}

export interface UpdateEventInput {
    id: number;
}

export interface CreateGroupInput {
    exampleField?: Nullable<number>;
}

export interface UpdateGroupInput {
    id: number;
}

export interface CreatePostInput {
    exampleField?: Nullable<number>;
}

export interface UpdatePostInput {
    id: number;
}

export interface CreateUserInput {
    exampleField?: Nullable<number>;
}

export interface UpdateUserInput {
    id: number;
}

export interface Event {
    exampleField?: Nullable<number>;
}

export interface IQuery {
    events(): Nullable<Event>[] | Promise<Nullable<Event>[]>;
    event(id: number): Nullable<Event> | Promise<Nullable<Event>>;
    groups(): Nullable<Group>[] | Promise<Nullable<Group>[]>;
    group(id: number): Nullable<Group> | Promise<Nullable<Group>>;
    posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;
    post(id: number): Nullable<Post> | Promise<Nullable<Post>>;
    user(): Nullable<User>[] | Promise<Nullable<User>[]>;
    users(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createEvent(createEventInput: CreateEventInput): Event | Promise<Event>;
    updateEvent(updateEventInput: UpdateEventInput): Event | Promise<Event>;
    removeEvent(id: number): Nullable<Event> | Promise<Nullable<Event>>;
    createGroup(createGroupInput: CreateGroupInput): Group | Promise<Group>;
    updateGroup(updateGroupInput: UpdateGroupInput): Group | Promise<Group>;
    removeGroup(id: number): Nullable<Group> | Promise<Nullable<Group>>;
    createPost(createPostInput: CreatePostInput): Post | Promise<Post>;
    updatePost(updatePostInput: UpdatePostInput): Post | Promise<Post>;
    removePost(id: number): Nullable<Post> | Promise<Nullable<Post>>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export interface Group {
    exampleField?: Nullable<number>;
}

export interface Post {
    exampleField?: Nullable<number>;
}

export interface User {
    exampleField?: Nullable<number>;
}

type Nullable<T> = T | null;
