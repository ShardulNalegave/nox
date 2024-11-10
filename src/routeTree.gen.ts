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
import { Route as AdminPeopleIndexImport } from './routes/admin/people/index'
import { Route as AdminPeopleCategoryIDImport } from './routes/admin/people/$categoryID'

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

const AdminPeopleIndexRoute = AdminPeopleIndexImport.update({
  id: '/people/',
  path: '/people/',
  getParentRoute: () => AdminRoute,
} as any)

const AdminPeopleCategoryIDRoute = AdminPeopleCategoryIDImport.update({
  id: '/people/$categoryID',
  path: '/people/$categoryID',
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
    '/admin/people/$categoryID': {
      id: '/admin/people/$categoryID'
      path: '/people/$categoryID'
      fullPath: '/admin/people/$categoryID'
      preLoaderRoute: typeof AdminPeopleCategoryIDImport
      parentRoute: typeof AdminImport
    }
    '/admin/people/': {
      id: '/admin/people/'
      path: '/people'
      fullPath: '/admin/people'
      preLoaderRoute: typeof AdminPeopleIndexImport
      parentRoute: typeof AdminImport
    }
  }
}

// Create and export the route tree

interface AdminRouteChildren {
  AdminSettingsRoute: typeof AdminSettingsRoute
  AdminIndexRoute: typeof AdminIndexRoute
  AdminPeopleCategoryIDRoute: typeof AdminPeopleCategoryIDRoute
  AdminPeopleIndexRoute: typeof AdminPeopleIndexRoute
}

const AdminRouteChildren: AdminRouteChildren = {
  AdminSettingsRoute: AdminSettingsRoute,
  AdminIndexRoute: AdminIndexRoute,
  AdminPeopleCategoryIDRoute: AdminPeopleCategoryIDRoute,
  AdminPeopleIndexRoute: AdminPeopleIndexRoute,
}

const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/admin': typeof AdminRouteWithChildren
  '/admin/settings': typeof AdminSettingsRoute
  '/admin/': typeof AdminIndexRoute
  '/admin/people/$categoryID': typeof AdminPeopleCategoryIDRoute
  '/admin/people': typeof AdminPeopleIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/admin/settings': typeof AdminSettingsRoute
  '/admin': typeof AdminIndexRoute
  '/admin/people/$categoryID': typeof AdminPeopleCategoryIDRoute
  '/admin/people': typeof AdminPeopleIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/admin': typeof AdminRouteWithChildren
  '/admin/settings': typeof AdminSettingsRoute
  '/admin/': typeof AdminIndexRoute
  '/admin/people/$categoryID': typeof AdminPeopleCategoryIDRoute
  '/admin/people/': typeof AdminPeopleIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/admin'
    | '/admin/settings'
    | '/admin/'
    | '/admin/people/$categoryID'
    | '/admin/people'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/admin/settings'
    | '/admin'
    | '/admin/people/$categoryID'
    | '/admin/people'
  id:
    | '__root__'
    | '/'
    | '/admin'
    | '/admin/settings'
    | '/admin/'
    | '/admin/people/$categoryID'
    | '/admin/people/'
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
        "/admin/settings",
        "/admin/",
        "/admin/people/$categoryID",
        "/admin/people/"
      ]
    },
    "/admin/settings": {
      "filePath": "admin/settings.tsx",
      "parent": "/admin"
    },
    "/admin/": {
      "filePath": "admin/index.tsx",
      "parent": "/admin"
    },
    "/admin/people/$categoryID": {
      "filePath": "admin/people/$categoryID.tsx",
      "parent": "/admin"
    },
    "/admin/people/": {
      "filePath": "admin/people/index.tsx",
      "parent": "/admin"
    }
  }
}
ROUTE_MANIFEST_END */
