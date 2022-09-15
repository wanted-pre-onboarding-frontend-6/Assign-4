# angular-cli의 이슈 목록과 상세 내용을 확인하는 웹 사이트 

## 📌 프로젝트 소개

특정 깃헙 레파지토리 angular-cli의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

## 📌 배포

 url
<br />

## 📌 프로젝트 설치 및 시작

#### 프로젝트 클론

```shell
$ git clone https://github.com/wanted-pre-onboarding-frontend-6/Assign-4.git
```

#### 패키지 설치

```shell
$ npm install
```

#### 서버 실행

```shell
$ npm run start
```

## 📌 팀원 소개

<br/>

<table align="center">
<tr >
<td align="center"><a href="https://github.com/LoggingCo"><img  src="https://avatars.githubusercontent.com/LoggingCo" width="100%"  height="50%"/></a></td>
<td align="center"><a href="https://github.com/sming0112"><img src="https://avatars.githubusercontent.com/sming0112" width="100%"  height="50%"/></a></td>
<td align="center"><a href="https://github.com/YSBINN"><img src="https://avatars.githubusercontent.com/YSBINN" width="100%" height="50%" /></a></td>
<td align="center"><a href="https://github.com/Leejha"><img src="https://avatars.githubusercontent.com/Leejha" width="100%"  height="50%"/></a></td>
<td align="center"><a href="https://github.com/seriparkdev"><img src="https://avatars.githubusercontent.com/seriparkdev" width="100%"  height="50%"/></a></td>
</tr>
<tr>
<td align="center"><b>김성용(팀장)</b></td>
<td align="center"><b>성민규</b></td>
<td align="center"><b>임상빈</b></td>
<td align="center"><b>이재하</b></td>
<td align="center"><b>박세리</b></td>
</tr>
<tr>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
</tr>
</table>

## 📌프로젝트 과정 소개

[Git전략](https://github.com/wanted-pre-onboarding-frontend-6/Assign-1/wiki/Git-%EC%A0%84%EB%9E%B5)

[커밋 컨벤션 및 코딩 컨벤션](https://github.com/wanted-pre-onboarding-frontend-6/Assign-1/wiki/%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98-%EB%B0%8F-%EC%BD%94%EB%94%A9-%EC%BB%A8%EB%B2%A4%EC%85%98)

## 📌 디자인 시안
[LINK (designed by 김성용)](https://www.figma.com/file/55oSEG2YGeBtfyCHRy5B8k/Untitled?node-id=0%3A1)

## 📌 프로젝트 구조

<details>
<summary>open</summary>

```
├─api
├─assets
│  ├─font
│  └─img
├─components
│  ├─Alert
│  ├─Button
│  ├─Input
│  ├─layout
│  │  ├─header
│  │  └─side
│  │      ├─content
│  │      │  └─list
│  │      └─header
│  └─spiner
├─context
├─conts
├─hooks
├─pages
│  ├─issueDetail
│  │  └─components
│  ├─issueList
│  │  └─components
│  │      └─card
│  └─mainHome
├─router
├─styles
├─types
│  ├─api
│  └─style
└─utils
```

</details>

## 📌기술 스택
 
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) 
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) 
![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

## 📌기능 목록 명세

### ✔ 이슈 목록 가져오기 API 활용

-   Context API를 활용한 API 연동
-   데이터 요청 중 로딩 표시

### ✔ open 상태의 이슈 중 코멘트가 많은 순으로 정렬

-   지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시

### ✔ 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시

-   UI는 데스크톱, 모바일에서 보았을 때 모두 읽기 편하게 구현


### ✔ 다섯번째 셀에는 광고 이미지 출력

-   광고 이미지 클릭 시 https://thingsflow.com/ko/home로 이동

### ✔ 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)


### ✔ 이슈의 상세 내용 표시

-   이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시

### ✔ 공통 헤더

-   두 페이지는 공통 헤더를 공유
-   헤더에는 Organization Name / Repository Name이 표시

## 📌 Best Practice

### 💡 의존성 부여

의존성 부여를 이용하여 클래스 내부에서 가지고 있는 것이 아니라, 클래스를 생성할 때 외부에서 주입하는 식으로 변경하였습니다.
이에따라 연관된 동작을 쉽게 변경해서 다양하게 사용할 수 있습니다.

### 💡 styled components 스타일 코드 컴포넌트 내에 배치

응집도를 우선시 하여 컴포넌트 구현 코드와 같이 배치하였습니다.
