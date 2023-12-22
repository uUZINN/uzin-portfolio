export function setFlowBanner() {
    const $wrap = document.querySelector('.flow_banner');
    const $list = document.querySelector('.flow_banner .list');
    let wrapWidth = $wrap.offsetWidth; // width 값은 offsetWidth로 가져옵니다.
    let listWidth = $list.offsetWidth; // width 값은 offsetWidth로 가져옵니다.
    const speed = 30; // 1초에 몇픽셀 이동하는지 설정

    // 리스트 복제
    let $clone = $list.cloneNode(true); // cloneNode로 복제합니다.
    $wrap.appendChild($clone);
    flowBannerAct();

    // 배너 실행 함수
    function flowBannerAct() {
        // 무한 반복을 위해 리스트를 복제 후 배너에 추가
        if (listWidth < wrapWidth) {
            const listCount = Math.ceil(wrapWidth * 2 / listWidth);
            for (let i = 2; i < listCount; i++) {
                $clone = $list.cloneNode(true); // cloneNode로 복제합니다.
                $wrap.appendChild($clone);
            }
        }
        $wrap.querySelector('.list').style.animation = `${listWidth / speed}s linear infinite flowRolling`;
    }

    // 마우스가 요소 위로 진입했을 때 일시정지
    $wrap.addEventListener('mouseenter', function () {
        $wrap.querySelector('.list').style.animationPlayState = 'paused';
    });

    // 마우스가 요소에서 빠져나갈 때 재생
    $wrap.addEventListener('mouseleave', function () {
        $wrap.querySelector('.list').style.animationPlayState = 'running';
    });
}