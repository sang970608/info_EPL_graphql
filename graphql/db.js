export let team = [
    {
        id: 1,
        teamname : "맨체스터 시티 (Manchester City)",
        stadium: "에티하드 스타디움 (Etihad Stadium)",
        director : "펩 과르디올라 (Josep Guardiola)",
        players : [
            {
                backNo: 2,
                name: "카일 워커",
                position: "DF"
            },{
                backNo: 3,
                name: "후벵 디아스",
                position: "DF"
            },{
                backNo: 4,
                name: "칼빈 필립스",
                position: "DF"
            },{
                backNo: 5,
                name: "존 스톤스",
                position: "DF"
            },{
                backNo: 6,
                name: "네이션 아케",
                position: "DF"
            },{
                backNo: 8,
                name: "마테오 코바치치",
                position: "MF"
            },{
                backNo: 9,
                name: "엘링 홀란",
                position: "FW"
            },{
                backNo: 10,
                name: "잭 그릴리쉬",
                position: "MF"
            },{
                backNo: 11,
                name: "제레미 도쿠",
                position: "MF"
            },{
                backNo: 16,
                name: "로드리",
                position: "MF"
            },{
                backNo: 17,
                name: "케빈 더 브라위너",
                position: "MF",
                captain: true
            },{
                backNo: 18,
                name: "슈테판 오르테가",
                position: "GK"
            },{
                backNo: 19,
                name: "훌리안 알바레스",
                position: "FW"
            },{
                backNo: 20,
                name: "베르나르두 실바",
                position: "MF"
            },{
                backNo: 21,
                name: "세르히오 고메스",
                position: "DF"
            }
        ]
    },{
        id: 2,
        teamname : "토트넘 핫스퍼 (Tottenham Hotspur)",
        stadium: "토트넘 핫스퍼 스타디움 (Tottenham Hotspur Stadium)",
        director : "엔지 포스테코글루 (Ange Postecoglou)"
    },{
        id: 3,
        teamname : "리버풀 (Liverpool)",
        stadium: "안필드 (Anfield)",
        director : "위르겐 클롭 (Jürgen Klopp)"
    },{
        id: 4,
        teamname : "아스날 (Arsenal)",
        stadium: "에미레이트 스타디움 (Emirates Stadium)",
        director : "미켈 아르테타 (Mikel Arteta)"
    },{
        id: 5,
        teamname : "첼시 (Chelsea)",
        stadium: "스탬포드 브릿지 (Stamford Bridge)",
        director : "마우리시오 포체티노 (Mauricio Pochettino)"
    },{
        id: 6,
        teamname : "맨체스터 유나이티드 (Manchester United)",
        stadium: "올드 트래포드 (Old Trafford)",
        director : "에릭 텐하흐 (Erik ten Hag)"
    },{
        id: 7,
        teamname : "뉴캐슬 유나이티드 (Newcastle United)",
        stadium: "세인트 제임스 파크 (St. James' Park)",
        director : "에디 하우 (Eddie Howe)"
    },{
        id: 8,
        teamname : "아스톤 빌라 (Aston Villa)",
        stadium: "빌라 파크(Villa Park)",
        director : "우나이 에미리 (Unai Emery)"
    },{
        id: 9,
        teamname : "브라이튼 앤 호브 알비온 (Brighton & Hove Albion)",
        stadium: "아메리칸 익스프레스 스타디움 (American Express Stadium)",
        director : "로베르토 데 제르비 (Roberto De Zerbi)"
    },{
        id: 10,
        teamname : "브렌트포드 (Brentford)",
        stadium: "지테크 커뮤니티 스타디움 (Gtech Community Stadium)",
        director : "토마스 프랑크 (Thomas Frank)"
    },{
        id: 11,
        teamname : "크리스탈 팰리스 (Crystal Palace)",
        stadium: "셀허스트 파크 (Selhurst Park)",
        director : "로이 호지슨 (Roy Hodgson)"
    },{
        id: 12,
        teamname : "웨스트햄 (West Ham United)",
        stadium: "런던 스타디움 (London Stadium)",
        director : "데이비드 모예스 (David Moyes)"
    },{
        id: 13,
        teamname : "노팅엄 포레스트 (Nottingham Forest)",
        stadium: "웨스트 브리지포드 (West Bridgford)",
        director : "스티브 쿠퍼 (Steve Cooper)"
    },{
        id: 14,
        teamname : "울버햄튼 원더러스 (Wolverhamption Wanderers)",
        stadium: "울버햄튼 (Wolverhampton)",
        director : "게리 오닐 (Gary O'Neil)"
    },{
        id: 15,
        teamname : "풀럼 (Fulham)",
        stadium: "해머스미스 앤 풀럼 구 (Hammersmith and Fulham)",
        director : "마르코 실바 (Marco Silva)"
    },{
        id: 16,
        teamname : "에버턴 (Everton)",
        stadium: "구디슨 파크 (Goodison Park)",
        director : "션 다이치 (Sean Dyche)"
    },{
        id: 17,
        teamname : "루턴 타운 (Luton Town)",
        stadium: "루턴 (Luton)",
        director : "롭 에드워즈 (Rob Edwards)"
    },{
        id: 18,
        teamname : "AFC 본머스 (Association Football Club Bournemouth)",
        stadium: "바이탈리티 스타디움 (Vitality Stadium)",
        director : "안도니 이라올라 (Andoni Iraola)"
    },{
        id: 19,
        teamname : "번리 (Burnley)",
        stadium: "터프 무어 (Turf Moor)",
        director : "뱅상 콤파니 (Vincent Kompany)"
    },{
        id: 20,
        teamname : "셰필드 (Sheffield)",
        stadium: "코치 앤 호스 그라운드(Coach and Horses Ground)",
        director : "라이언 크레스웰(Ryan Cresswell)"
    }
];

export const getTeams = () => teams;

export const getById = id => {
    const filtereTeams = teams.filter(team => team.id === id);
    return filtereTeams[0];
}
