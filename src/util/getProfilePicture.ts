const pps: string[] = [
    "https://img.playbook.com/xt6rrUxll64SCpO-JFV_8NTvIEU5jnqV_wWDBsufjIc/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzcwMTIwNTc2/LTdjNmEtNDE5MC1h/NGZkLWRjYTA0NzU5/MTJiMA",
    "https://img.playbook.com/vVEmWH2hExIxRBZIydl6PfGvTd2xTtOLsbsuHOU6M6g/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzBhYzAwNjA5/LWJlMzItNDYyMS04/YjFiLTFjMzBhNzcx/Mjc0Mw",
    "https://img.playbook.com/EArHzlut7RQz97Fo8tS5H3neKdUAMfTRKghUQ5hJ1-4/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2NkODQzODJm/LTQ2MjQtNGU2NC05/YmQ3LThiMDM5MmU4/YzdiNQ",
    "https://img.playbook.com/0hLRrB55Tj3nn-2BrKygOeAZnXDZaQcjuk7N6Yt7jgM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2E2OGZlOWU2/LWRiMTQtNGMxYS05/NTE3LTNkYzUxYTFk/YjA3Ng",
    "https://img.playbook.com/vhbb2cnhfoXrx64Oyr_5WmU4IYAY849LpGMT4QlNSgc/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2YzMzU5MTEw/LTYzNmUtNDFlZC1h/YjMxLTQxN2NmYTI3/Y2Y2Yw",
];

export function getProfilePicture(): string {
    const randomIndex = Math.floor(Math.random() * pps.length);
    return pps[randomIndex];
}
