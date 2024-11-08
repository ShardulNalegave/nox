/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AdminImport } from './routes/admin'
import { Route as IndexImport } from './routes/index'
import { Route as AdminIndexImport } from './routes/admin/index'
import { Route as AdminSettingsImport } from './routes/admin/settings'
import { Route as AdminPeopleImport } from './routes/admin/people'

// Create/Update Routes

const AdminRoute = AdminImport.update({
  id: '/admin',
  path: '/admin',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AdminIndexRoute = AdminIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AdminRoute,
} as any)

const AdminSettingsRoute = AdminSettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => AdminRoute,
} as any)

const AdminPeopleRoute = AdminPeopleImport.update({
  id: '/people',
  path: '/people',
  getParentRoute: () => AdminRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/admin': {
      id: '/admin'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminImport
      parentRoute: typeof rootRoute
    }
    '/admin/people': {
      id: '/admin/people'
      path: '/people'
      fullPath: '/admin/people'
      preLoaderRoute: typeof AdminPeopleImport
      parentRoute: typeof AdminImport
    }
    '/admin/settings': {
      id: '/admin/settings'
      path: '/settings'
      fullPath: '/admin/settings'
      preLoaderRoute: typeof AdminSettingsImport
      parentRoute: typeof AdminImport
    }
    '/admin/': {
      id: '/admin/'
      path: '/'
      fullPath: '/admin/'
      preLoaderRoute: typeof AdminIndexImport
      parentRoute: typeof AdminImport
    }
  }
}

// Create and export the route tree

interface AdminRouteChildren {
  AdminPeopleRoute: typeof AdminPeopleRoute
  AdminSettingsRoute: typeof AdminSettingsRoute
  AdminIndexRoute: typeof AdminIndexRoute
}

const AdminRouteChildren: AdminRouteChildren = {
  AdminPeopleRoute: AdminPeopleRoute,
  AdminSettingsRoute: AdminSettingsRoute,
  AdminIndexRoute: AdminIndexRoute,
}

const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/admin': typeof AdminRouteWithChildren
  '/admin/people': typeof AdminPeopleRoute
  '/admin/settings': typeof AdminSettingsRoute
  '/admin/': typeof AdminIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/admin/people': typeof AdminPeopleRoute
  '/admin/settings': typeof AdminSettingsRoute
  '/admin': typeof AdminIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/admin': typeof AdminRouteWithChildren
  '/admin/people': typeof AdminPeopleRoute
  '/admin/settings': typeof AdminSettingsRoute
  '/admin/': typeof AdminIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/admin' | '/admin/people' | '/admin/settings' | '/admin/'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/admin/people' | '/admin/settings' | '/admin'
  id:
    | '__root__'
    | '/'
    | '/admin'
    | '/admin/people'
    | '/admin/settings'
    | '/admin/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AdminRoute: typeof AdminRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AdminRoute: AdminRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/admin"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/admin": {
      "filePath": "admin.tsx",
      "children": [
        "/admin/people",
        "/admin/settings",
        "/admin/"
      ]
    },
    "/admin/people": {
      "filePath": "admin/people.tsx",
      "parent": "/admin"
    },
    "/admin/settings": {
      "filePath": "admin/settings.tsx",
      "parent": "/admin"
    },
    "/admin/": {
      "filePath": "admin/index.tsx",
      "parent": "/admin"
    }
  }
}
ROUTE_MANIFEST_END */
