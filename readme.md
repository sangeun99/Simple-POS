
<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contact](#contact)

<!-- ABOUT THE PROJECT -->
## About The Project

  이 시스템은 카페의 POS기 역할을 수행한다. 
  고객 사용자는 메뉴 주문을 할 수 있고, 관리자 사용자는 주문 내역을 확인할 수 있다.

### Built With

* [Express](https://github.com/expressjs/express)
* [MySQL](https://dev.mysql.com/doc/)

<!-- GETTING STARTED -->
## Getting Started

다음의 간단한 작업 후에 프로그램을 실행시킬 수 있습니다.

### Installation

1. 이 레파지토리를 Clone합니다.
```
git clone http://khuhub.khu.ac.kr/2020-02-database/2018102205.git
```

2. MySQL에 접속하고 models 폴더 안의 SQL문을 실행합니다.

3. /config/database.js 에 DB의 정보를 넣어줍니다.

4. NPM packages를 설치합니다.
```
npm install
```

<!-- USAGE EXAMPLES -->
## Usage

<p float="left">
  <img src="/images/screenshot_menulist.png" width="20%" height="20%" alt="menulist"></img>
  <img src="/images/screenshot_order.png" width="20%" height="20%" alt="order"></img>
</p>

고객 사용자는 휴대폰 번호를 이용해 로그인 과정을 진행합니다. 메뉴 리스트에서 현재 준비 가능한 메뉴를 확인하고 마실 음료나 디저트를 선택합니다. 시스템을 통해 직원과 직접 대면하지 않고도 주문할 수 있습니다.

관리자 사용자는 고객 사용자가 주문한 내역을 확인하고 관리할 수 있습니다. 메뉴가 준비된 후에는 주문의 상태를 바꾸어 완료 처리합니다.

또한 메뉴를 관리합니다. 메뉴 종류, 이름, 가격, 준비가능여부, 이미지를 입력해 메뉴를 등록할 수 있습니다. 다양한 이유로 기존의 메뉴가 준비 불가능한 상태에 있거나 가격에 변동이 있을 때 메뉴의 상태를 수정할 수 있습니다.

마지막으로, 관리자는 매출을 확인할 수 있습니다. 매출 관리 탭을 이용해 오늘의 주문 내역을 전부 확인할 수 있습니다. 날짜별 매출을 확인하여 비교할 수도 있습니다.

<!-- LICENSE -->
## License

MIT 라이센스에 따라 배포. 자세한 내용은 `LICENSE`를 참조하세요.

<!-- CONTACT -->
## Contact

* 엄상은 | sangeun99@khu.ac.kr

* [http://khuhub.khu.ac.kr/2020-02-database/2018102205.git](http://khuhub.khu.ac.kr/2020-02-database/2018102205.git)