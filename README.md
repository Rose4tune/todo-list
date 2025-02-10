# Todo List 프로젝트

이 프로젝트는 사용자가 할 일을 추가, 수정, 삭제하고, 완료 상태를 관리할 수 있는 Todo List 애플리케이션입니다.
할 일에 대한 메모와 이미지 업로드 기능도 제공하며, Next.js + Zustand를 사용한 상태 관리와 API 연동을 통해 데이터를 유지합니다.

---

## 기능 목록

### 할 일 목록 (/)
- 새로운 할 일 추가 (Enter 입력 또는 “추가하기” 버튼 클릭)
- 진행 중(To Do)과 완료(Done)된 할 일 구분
-	할 일 클릭 시 상세 페이지 이동
-	체크박스 클릭 시 완료 상태 변경

### 할 일 상세 페이지 (/items/:itemId)
-	할 일 제목, 메모 수정 가능
-	완료 상태 변경 (체크박스 클릭)
-	이미지 업로드 가능 (파일명 영어 제한, 5MB 이하)
-	변경 사항이 있을 경우, “수정 완료” 버튼 활성화
-	삭제 기능 제공

---

## 기술 스택
-	Frontend: Next.js, TypeScript, Zustand
-	Styling: Tailwind CSS, SCSS
-	State Management: Zustand
-	API 요청: Fetch API

---

## API 연동

**사용한 API 목록**
-	할 일 목록 조회: GET /api/{tenantId}/items
-	할 일 추가: POST /api/{tenantId}/items
-	할 일 수정: PATCH /api/{tenantId}/items/{id}
-	할 일 삭제: DELETE /api/{tenantId}/items/{id}

---

## 스타일링
-	Tailwind CSS와 SCSS를 병행하여 UI 구성
-	반응형 지원 (모바일, 태블릿, 데스크탑)
-	디자인 시스템 적용
-	color.scss에 컬러 시스템 정의
-	font.scss에 폰트 스타일 정의

---

## 이미지 업로드 처리
-	파일 크기 제한: 5MB 이하
-	파일명 제한: 영어, 숫자, _, - 만 허용
-	새 이미지 업로드 시 미리보기 제공
-	기존 이미지가 존재할 경우, 유지

---

## 상태 관리 (Zustand 사용)
-	할 일 목록 상태 유지 (fetchTodos, addTodo, deleteTodo)
-	상세 페이지에서 할 일 개별 관리 (fetchTodoDetail, updateTodo)
-	새로고침해도 상태 유지

---

## 폴더 구조
```
📦 src
 ┣ 📂 components       # 재사용 가능한 UI 컴포넌트
 ┃ ┣ 📜 Button.tsx
 ┃ ┣ 📜 TodoItem.tsx
 ┃ ┣ 📜 TodoList.tsx
 ┃ ┗ 📜 TodoDetail.tsx
 ┣ 📂 pages            # 페이지 컴포넌트
 ┃ ┣ 📜 index.tsx
 ┃ ┗ 📜 items/[itemId].tsx
 ┣ 📂 store            # Zustand 상태 관리
 ┃ ┗ 📜 todoStore.ts
 ┣ 📂 styles           # SCSS 스타일링
 ┃ ┣ 📜 globals.scss
 ┃ ┣ 📜 color.scss
 ┃ ┗ 📜 font.scss
 ┣ 📂 public           # 정적 파일 (이미지, 폰트 등)
 ┗ 📜 tailwind.config.ts  # Tailwind 설정
```

---

## 프로젝트 실행 방법
```
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```
http://localhost:3000 에서 확인 가능
