## TODO:

- [ ] Search for movie on add
- [ ] Get multiple pages of results with promise all?
- [ ] Add indicator that filters are being applied
- [x] Search on change, not submit
- [x] Refactor filters to their own components
- [x] Make getNowPlaying a promise, so we can call directly and chain
- [x] Make database stuff promises, so it can be chained more easily
- [x] Have to make an update on watch
- [x] Add permance for watched state
- [x] Use their video ID
- [x] Make video id a unique field
- [x] Refactor all db queries to promises and simplify to share 1 query function

## Time

- React: 4 hrs
- Express: 2hrs (large portion on Webpack)
- API wrangling: 1.5hrs
- DB and hooking it all up - 3.5hrs
- CSS - 2.5hrs

## React

- [x] {} brackets and array map - doesn't work!
- [ ] importing and exporting components
- [ ] React imports required in each component file
- [ ] Forms - state and inputs
- [ ] How to extract input from onChange event
- [x] extends React.Component
- [ ] Adjacent components must be wrapped in an enclosing tag
- [ ] Need to think through state before starting - who should handle what?
- [ ] How to handle item disappearing as soon as it is filtered
- [ ] Filtered checkbox not updating until re render? - think it is to do with a subcomponent alreadying having rendered
- [ ] State for subcomponents
- [ ] Race conditions in state

## Node

- [x] How to make a http POST
- [ ] Difference between require and import from

- [ ] Promises wrapping promises
- [ ] Updating client when server updates
- [ ] What should be rendered on the server and what on the client?

## Webpack

- [ ] Adding node modules

## Express

- [ ] How should you make an API query for another part of your app? (maybe more an axios question)

## JS

- [ ] Find value in array of objects and update one value

## SQL

- [ ] Only insert entry if doesn't already exist in table

## API

- [ ] What are authorization headers?