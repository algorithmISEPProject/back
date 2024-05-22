
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateEventInput {
    name: string;
    description?: Nullable<string>;
    location?: Nullable<string>;
    date?: Nullable<string>;
    time?: Nullable<string>;
}

export interface UpdateEventInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    location?: Nullable<string>;
    date?: Nullable<string>;
    time?: Nullable<string>;
}

export interface CreateGroupInput {
    name: string;
    description?: Nullable<string>;
}

export interface UpdateGroupInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
}

export interface CreateHobbyInput {
    name: string;
}

export interface UpdateHobbyInput {
    name: string;
}

export interface CreatePostInput {
    content?: Nullable<string>;
    imageURL?: Nullable<string>;
}

export interface CreateUserInput {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface UpdateUserInput {
    username: string;
    firstName: string;
    lastName: string;
    password: string;
    avatar?: Nullable<string>;
    banner?: Nullable<string>;
}

export interface Event {
    id: number;
    name: string;
    description?: Nullable<string>;
    location?: Nullable<string>;
    date?: Nullable<string>;
    time?: Nullable<string>;
    attendees?: Nullable<Nullable<User>[]>;
}

export interface IQuery {
    events(): Nullable<Event>[] | Promise<Nullable<Event>[]>;
    event(id: number): Nullable<Event> | Promise<Nullable<Event>>;
    groups(): Nullable<Group>[] | Promise<Nullable<Group>[]>;
    group(id: number): Nullable<Group> | Promise<Nullable<Group>>;
    hobby(id: number): Hobby | Promise<Hobby>;
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
    createHobby(createHobbyInput: CreateHobbyInput): Hobby | Promise<Hobby>;
    updateHobby(updateHobbyInput: UpdateHobbyInput): Hobby | Promise<Hobby>;
    removeHobby(id: number): Nullable<Hobby> | Promise<Nullable<Hobby>>;
    createPost(createPostInput: CreatePostInput): Post | Promise<Post>;
    removePost(id: number): Nullable<Post> | Promise<Nullable<Post>>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
    addHobbyToUser(userId: number, hobbyId: number): Nullable<User> | Promise<Nullable<User>>;
}

export interface Group {
    id: number;
    name: string;
    description?: Nullable<string>;
    members?: Nullable<Nullable<User>[]>;
}

export interface Hobby {
    id: number;
    name: string;
}

export interface Post {
    id: number;
    content?: Nullable<string>;
    imageURL?: Nullable<string>;
    createdAt: string;
}

export interface User {
    _id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    avatar?: Nullable<string>;
    banner?: Nullable<string>;
    bio?: Nullable<string>;
    location?: Nullable<string>;
    job?: Nullable<string>;
    descText?: Nullable<string>;
    descLink?: Nullable<string>;
    followers?: Nullable<Nullable<User>[]>;
    following?: Nullable<Nullable<User>[]>;
    friends?: Nullable<Nullable<User>[]>;
    posts: Post[];
    hobbies: Hobby[];
    events?: Nullable<Event[]>;
    groups?: Nullable<Group[]>;
    createdAt: string;
}

type Nullable<T> = T | null;
