# Osa 7 / Part 7

## React Router

base code was cloned from [here](/https://github.com/fullstack-hy2020/routed-anecdotes)

Installing React Router

```shell
npm install react-router-dom
```

inside <Router> links are marked as <Link>

- example: <Link to="/notes">notes</Link>
- in above case the URL in browser will be changed to /notes

components which will be rendered based on the URL are defined with component <Route>

- example: <Route path="/notes" element={<Notes />} />
- in above if URL path is /notes, Notes -element will be rendered

Components which will be rendered based on url are placed inside <Routes> -component (inside the <Router>)

## Remember

Spread operator: const some= {a:1, b:2, c:3}, const {a, ...withoutA}=some, (withoutA is now {b:2, c:3})
