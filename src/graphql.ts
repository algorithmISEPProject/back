
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

export interface CreateHobbyInput {
    exampleField?: Nullable<number>;
}

export interface UpdateHobbyInput {
    id: number;
}

export interface CreatePostInput {
    exampleField?: Nullable<number>;
}

export interface UpdatePostInput {
    id: number;
}

export interface CreateUserInput {
    _id: string;
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
    exampleField?: Nullable<number>;
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
    users(id: string): Nullable<User> | Promise<Nullable<User>>;
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
    updatePost(updatePostInput: UpdatePostInput): Post | Promise<Post>;
    removePost(id: number): Nullable<Post> | Promise<Nullable<Post>>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(id: string): Nullable<User> | Promise<Nullable<User>>;
    addHobbyToUser(userId: string, hobbyId: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface Group {
    exampleField?: Nullable<number>;
}

export interface Hobby {
    exampleField?: Nullable<number>;
}

export interface Post {
    id: string;
    content: string;
    imageURL?: Nullable<string>;
}

export interface User {
    _id: string;
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
    hobbies?: Nullable<Hobby[]>;
    posts?: Nullable<Post[]>;
    events?: Nullable<Event[]>;
    groups?: Nullable<Group[]>;
    createdAt: string;
}

type Nullable<T> = T | null;
