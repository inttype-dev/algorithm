function solution(myString, pat) {
    const changed = myString
        .replaceAll("A", "C")
        .replaceAll("B", "A")
        .replaceAll("C", "B");

    return changed.includes(pat) ? 1 : 0;
}