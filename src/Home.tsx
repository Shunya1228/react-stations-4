import React from 'react';

function Home() {
  return (
    <div className="home">
      <header className="header">
        <h1 className="header-title">Shunya Nagasaki</h1>
        <ul className="nav-list">
          <li className="nav-item">About</li>
          <li className="nav-item">Portfolio</li>
          <li className="nav-item">Contact</li>
        </ul>
      </header>

      <section className="about">
        <h2 className="section-title">自己紹介</h2>
        <img src="test.jp" alt="テスト画像" className="profile-image" />
        <p className="about-text">サイトをご覧いただきましてありがとうございます。</p>
        <p className="about-text">初めまして。長崎駿也と申します。</p>
      </section>

      <section className="portfolio">
        <h2 className="section-title">Portfolio</h2>
        <div className="portfolio-container">
        <div className="portfolio-item">
          <img src="test.jpg" alt="テスト画像" className="portfolio-image" />
          <h3 className="portfolio-title">ポートフォリオ1</h3>
          <p className="portfolio-description">ポートフォリオの説明です。</p>
        </div>

        <div className="portfolio-item">
          <img src="test.jpg" alt="テスト画像" className="portfolio-image" />
          <h3 className="portfolio-title">ポートフォリオ2</h3>
          <p className="portfolio-description">ポートフォリオの説明です。</p>
        </div>

        <div className="portfolio-item">
          <img src="test.jpg" alt="テスト画像" className="portfolio-image" />
          <h3 className="portfolio-title">ポートフォリオ3</h3>
          <p className="portfolio-description">ポートフォリオの説明です。</p>
        </div>

        <div className="portfolio-item">
          <img src="test.jpg" alt="テスト画像" className="portfolio-image" />
          <h3 className="portfolio-title">ポートフォリオ4</h3>
          <p className="portfolio-description">ポートフォリオの説明です。</p>
        </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Shunya Nagasaki. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
