interface ArticleOptions {
  title: string;
  text: string;
  views: number;
  buttonText: string;
  isButtonVisible: boolean;
}

export default class Article {
  title: string;

  text: string;

  views: number;

  buttonText: string;

  isButtonVisible: boolean;

  id: number;

  constructor(options: ArticleOptions = {
    title: 'UNSET', text: 'UNSET', views: 1, buttonText: 'UNSET', isButtonVisible: false,
  }) {
    const {
      title, text, views, buttonText, isButtonVisible,
    } = options;

    this.title = title;
    this.text = text;
    this.views = views;
    this.buttonText = buttonText;
    this.isButtonVisible = isButtonVisible;
    this.id = Date.now() + (Math.floor(Math.random() * 1000001));
  }
}
