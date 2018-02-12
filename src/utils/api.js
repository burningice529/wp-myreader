import wxRequest from '../utils/wxRequest.js';
// 获取书源
export function getSource(id) {
  return wxRequest(`/api/toc?view=summary&book=${id}`);
}

// 获取章节列表
export function getChapterList(id) {
  return wxRequest(`/api/toc/${id}?view=chapters`);
}

// 获取章节内容
export function getChapter(link) {
  return wxRequest(`/chapter/${link}?k=2124b73d7e2e1945&t=1468223717`);
}

// 搜索书籍
export function search(query) {
  return wxRequest(`/api/book/fuzzy-search?query=${query}&start=0&limit=10`);
}

// 获取书籍详细信息
export function getDetail(id) {
  return wxRequest(`/api/book/${id}`);
}
