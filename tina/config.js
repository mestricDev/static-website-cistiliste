import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: 'main',
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  schema: {
    collections: [
      {
        name: 'home',
        label: 'Home',
        path: 'content/home',
        fields: [
          { type: 'string', name: 'title', label: 'Title' },
          { type: 'string', name: 'description', label: 'Description' },
          { type: 'rich-text', name: 'content', label: 'Content' },
        ],
      },
      {
        name: 'about',
        label: 'About',
        path: 'content/about',
        fields: [
          { type: 'string', name: 'title', label: 'Title' },
          { type: 'string', name: 'description', label: 'Description' },
          { type: 'rich-text', name: 'content', label: 'Content' },
        ],
      },
      {
        name: 'blog',
        label: 'Blog',
        path: 'content/blog',
        fields: [
          { type: 'string', name: 'title', label: 'Title' },
          { type: 'string', name: 'description', label: 'Description' },
          { type: 'rich-text', name: 'content', label: 'Content' },
        ],
      },
    ],
  },
  cms: {
    enabled: true,
    sidebar: {
      position: 'displace',
    },
    toolbar: {
      position: 'bottom',
    },
  },
  roles: [
    {
      name: 'admin',
      label: 'Admin',
      permissions: ['*'],
    },
    {
      name: 'editor',
      label: 'Editor',
      permissions: ['content:read', 'content:write'],
    },
  ],
});
