import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import PostList from './ui/post/post-list';

export default function HomePage() {
  return (
    <div className="text-center mt-16">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Welcome to macio.dev</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">This website is meant to be a random collection of things (articles, tutorials, tools) that I find interesting and/or useful but you probably do not</p>

      <PostList />
    </div>
  );
}