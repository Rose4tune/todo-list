# 📝 Do It: Todo List  

![Next.js](https://img.shields.io/badge/Next.js-13-blue)  
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue)  
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-blue)  
![Zustand](https://img.shields.io/badge/Zustand-State%20Management-green)  
![Vercel](https://img.shields.io/badge/Vercel-Deployment-black)  

## 프로젝트 소개  
**Do It**은 할 일을 추가하고 완료 상태를 관리할 수 있는 **Todo List 웹 애플리케이션**입니다.  
사용자는 할 일을 추가, 완료, 수정, 삭제할 수 있으며, 데이터는 브라우저에 저장됩니다.  

🔗 **배포 링크:** [https://todo-list-three-gamma-42.vercel.app](https://todo-list-three-gamma-42.vercel.app)  

---

## 사용한 기술 스택  
- **Frontend:** Next.js 13, TypeScript, Tailwind CSS
- **상태 관리:** Zustand
- **API 연동:** fetch
- **배포:** Vercel
- **테스트:** Storybook

---

## 실행 방법  
1. 프로젝트 클론
```bash
git clone https://github.com/your-github-id/your-repo.git
cd your-repo
```
2. 패키지 설치
`npm install`
3. 로컬 실행
`npm run dev`
4. 로컬 접속
브라우저에서 http://localhost:3000 접속 가능

---

## 배포
1. Vercel CLI 배포 `npm run deploy`
2. GitHub main 브랜치 푸시 시 자동 배포
```
git add .
git commit -m "🚀 배포 업데이트"
git push origin main
```
3. Vercel 자동 배포됨

---

## 프로젝트 구조
```
📂 src
 ┣ 📂 components  # UI 컴포넌트
 ┣ 📂 pages       # Next.js 페이지 라우팅
 ┣ 📂 store       # Zustand 상태 관리
 ┣ 📂 styles      # Tailwind & Sass 스타일
 ┣ 📂 public      # 정적 파일 (이미지, 아이콘)
 ┣ 📜 README.md   # 프로젝트 설명 파일
```




