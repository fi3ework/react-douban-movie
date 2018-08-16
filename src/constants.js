const HOST =
  process.env.NODE_ENV === "production" ? "/proxy" : "http://localhost:8081";

// 正在热映
export const API_IN_THEATERS = `${HOST}/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b`;
// 即将上映
export const API_COMING_SOON = `${HOST}/movie/coming_soon?apikey=0b2bdeda43b5688921839c8ecb20399b`;
// 周口碑榜
export const API_WEEKLY = `${HOST}/movie/weekly?apikey=0b2bdeda43b5688921839c8ecb20399b`;
// 新片榜
export const API_NEW_MOVIES = `${HOST}/movie/new_movies?apikey=0b2bdeda43b5688921839c8ecb20399b`;
// 北美票房榜
export const API_US_BOX = `${HOST}/movie/us_box?apikey=0b2bdeda43b5688921839c8ecb20399b`;
// 北美票房榜
export const API_TOP_250 = `${HOST}/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b`;
// 电影条目
export const API_MOVIE_SUBJECT = `${HOST}/movie/subject/:id?apikey=0b2bdeda43b5688921839c8ecb20399b`;
// 长评
export const API_MOVIE_REVIEWS = `${HOST}/movie/subject/:id/reviews?apikey=0b2bdeda43b5688921839c8ecb20399b`;
// 短评
export const API_MOVIE_COMMENTS = `${HOST}/movie/subject/:id/comments?apikey=0b2bdeda43b5688921839c8ecb20399b`;
// 影人页
export const API_CELEBRITY = `${HOST}/movie/celebrity/:id?apikey=0b2bdeda43b5688921839c8ecb20399b`;
// 搜索页
export const API_SEARCH = `${HOST}/movie/search?q=:query&apikey=0b2bdeda43b5688921839c8ecb20399b`;
// Tag
export const API_TAG = `${HOST}/movie/search?tag=:tag&apikey=0b2bdeda43b5688921839c8ecb20399b`;
