# TiktokSample

TikTok風のUIを採用した動画フィードのモックアップアプリケーションです。

## 機能

- 縦スワイプによる動画切り替え
- 動画の自動再生/一時停止
- 作品詳細ページへの遷移
- レスポンシブデザイン

## 技術スタック

- React 18
- TypeScript
- Vite
- Chakra UI
- Swiper
- React Router
- Plyr

## 開発環境のセットアップ

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# ビルド
pnpm build

# プレビュー
pnpm preview
```

## プロジェクト構造

```
TiktokSample/
├── src/
│   ├── components/     # Reactコンポーネント
│   ├── App.tsx        # アプリケーションのルートコンポーネント
│   └── main.tsx       # エントリーポイント
├── public/
│   └── videos/        # サンプル動画
└── package.json       # 依存関係の定義
```

## ライセンス

MIT
