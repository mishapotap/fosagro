import { makeAutoObservable } from "mobx"
import { coursePagesData, courseTestsData } from "../data"
import { sectColors } from "../data/coursePagesData/general"

class CourseTest {
    activeChapterId = 1

    tests = {
        // ключи - id курсов
        1: {
            learnSectsIds: [],
            userAnswers: {},
            activeQId: courseTestsData.testsQsData[1][0].id,
            showStart: true,
            showFinal: false,
            showTest: false,
            showEndTestBtn: false,
            isLastSlide: false,
            treeRightAnswCount: 0,
            userPassedTest: false,
            showTreeInit: true,
            showTreeStart: false,
            showTreeWait: false,
            showTreeEnd: false,
        },
        2: {
            learnSectsIds: [],
            userAnswers: {},
            activeQId: courseTestsData.testsQsData[2][0].id,
            showStart: true,
            showFinal: false,
            showTest: false,
            showEndTestBtn: false,
            isLastSlide: false,
            treeRightAnswCount: 0,
            userPassedTest: false,
            showTreeInit: true,
            showTreeStart: false,
            showTreeWait: false,
            showTreeEnd: false,
        },
        3: {
            learnSectsIds: [],
            userAnswers: {},
            activeQId: courseTestsData.testsQsData[3][0].id,
            showStart: true,
            showFinal: false,
            showTest: false,
            showEndTestBtn: false,
            isLastSlide: false,
            treeRightAnswCount: 0,
            userPassedTest: false,
            showTreeInit: true,
            showTreeStart: false,
            showTreeWait: false,
            showTreeEnd: false,
        },
        4: {
            learnSectsIds: [],
            userAnswers: {},
            activeQId: courseTestsData.testsQsData[4][0].id,
            showStart: true,
            showFinal: false,
            showTest: false,
            showEndTestBtn: false,
            isLastSlide: false,
            treeRightAnswCount: 0,
            userPassedTest: false,
            showTreeInit: true,
            showTreeStart: false,
            showTreeWait: false,
            showTreeEnd: false,
        },
        5: {
            learnSectsIds: [],
            userAnswers: {},
            activeQId: courseTestsData.testsQsData[5][0].id,
            showStart: true,
            showFinal: false,
            showTest: false,
            showEndTestBtn: false,
            isLastSlide: false,
            treeRightAnswCount: 0,
            userPassedTest: false,
            showTreeInit: true,
            showTreeStart: false,
            showTreeWait: false,
            showTreeEnd: false,
        },
        6: {
            learnSectsIds: [],
            userAnswers: {},
            activeQId: courseTestsData.testsQsData[6][0].id,
            showStart: true,
            showFinal: false,
            showTest: false,
            showEndTestBtn: false,
            isLastSlide: false,
            treeRightAnswCount: 0,
            userPassedTest: false,
            showTreeInit: true,
            showTreeStart: false,
            showTreeWait: false,
            showTreeEnd: false,
        },
    }

    constructor() {
        makeAutoObservable(this)
    }

    get activeTestData() {
        return this.tests[this.activeChapterId]
    }

    get learnSectsData() {
        const courseData = coursePagesData[this.activeChapterId]
        const sectsData = this.learnSectsIds.map((id) => {
            if (id === "intro") {
                return {
                    id,
                    title: "Введение",
                    link: `/course${this.activeChapterId}/intro`,
                    color: sectColors.intro,
                }
            }
            const { sectTitle } = courseData[id]
            const sectLink = `/course${this.activeChapterId}/topic${id}/point1`
            const sectColor = sectColors[id]

            return {
                id,
                title: sectTitle,
                link: sectLink,
                color: sectColor,
            }
        })

        return sectsData
    }

    // eslint-disable-next-line class-methods-use-this
    get testQsData() {
        return courseTestsData.testsQsData[this.activeChapterId]
    }

    get showStart() {
        return this.activeTestData.showStart
    }

    get showTest() {
        return this.activeTestData.showTest
    }

    get showFinal() {
        return this.activeTestData.showFinal
    }

    get showTreeInit() {
        return this.activeTestData.showTreeInit
    }

    get showTreeStart() {
        return this.activeTestData.showTreeStart
    }

    get showTreeWait() {
        return this.activeTestData.showTreeWait
    }

    get showTreeEnd() {
        return this.activeTestData.showTreeEnd
    }

    get showEndTestBtn() {
        return this.activeTestData.showEndTestBtn
    }

    get userPassedTest() {
        return this.activeTestData.userPassedTest
    }

    get treeRightAnswCount() {
        return this.activeTestData.treeRightAnswCount
    }

    get nextCourseLink() {
        if (coursePagesData[+this.activeChapterId + 1]) {
            return `/course${+this.activeChapterId + 1}`
        }
        return "/"
    }

    // eslint-disable-next-line class-methods-use-this
    isQAnswerCorrect(correct, answer) {
        if (typeof correct === "object") {
            const wrongAnsw = answer.find((id) => !correct.includes(id))
            const correctAnswer = answer.find((id) => correct.includes(id))
            if (!wrongAnsw && correctAnswer) {
                return true
            }
            // eslint-disable-next-line eqeqeq
        } else if (answer == correct) return true

        return false
    }

    get learnSectsIds() {
        const wrongSectIds = []

        Object.entries(this.userAnswers).forEach(([qId, answer]) => {
            // eslint-disable-next-line eqeqeq
            const qData = this.testQsData.find(({ id }) => id == qId)

            const { correct, wrongAnswerSectId } = qData

            if (
                qData &&
                !wrongSectIds.includes(wrongAnswerSectId) &&
                !this.isQAnswerCorrect(correct, answer)
            ) {
                wrongSectIds.push(wrongAnswerSectId)
            }
        })

        return wrongSectIds
    }

    get finalContent() {
        const finCont = courseTestsData.finalData.find(({ rightAnswers }) =>
            rightAnswers.includes(this.rightAnswersCount)
        )
        return finCont.data
    }

    get allAnswersRight() {
        return this.rightAnswersCount === this.testQsData.length
    }

    get userAnswers() {
        return this.activeTestData.userAnswers
    }

    get activeQId() {
        return this.activeTestData.activeQId
    }

    get activeQInputType() {
        return this.qInputType(this.activeQId)
    }

    qInputType(qid) {
        // eslint-disable-next-line eqeqeq
        const activeQData = this.testQsData.find((i) => i.id == qid)
        if (activeQData) {
            if (typeof activeQData.correct === "object") {
                return "checkbox"
            }
            return "radio"
        }
        return "radio"
    }

    get isLastSlide() {
        return this.activeTestData.isLastSlide
    }

    get nextBtnDisabled() {
        if (!this.activeTestData.userAnswers[this.activeQId]) {
            return true
        }
        return false
    }

    get rightAnswersCount() {
        let count = 0

        Object.entries(this.userAnswers).forEach(([qId, answer]) => {
            // eslint-disable-next-line eqeqeq
            const qData = this.testQsData.find(({ id }) => id == qId)
            const { correct } = qData

            if (qData) {
                if (this.isQAnswerCorrect(correct, answer)) count += 1
            }
        })
        return count
    }

    get dataForCookies() {
        return this.tests
    }

    resetProgress() {
        this.tests[this.activeChapterId] = {
            learnSectsIds: [],
            userAnswers: {},
            activeQId: courseTestsData.testsQsData[this.activeChapterId][0].id,
            showStart: true,
            showFinal: false,
            showTest: false,
            showEndTestBtn: false,
            isLastSlide: false,
            treeRightAnswCount: 0,
            userPassedTest: false,
            showTreeInit: true,
            showTreeStart: false,
            showTreeWait: false,
            showTreeEnd: false,
        }
    }

    setDataFromCookies(dataString) {
        const data = JSON.parse(dataString)
        this.tests = data
    }

    setLearnSectId(id) {
        this.tests[this.activeChapterId].learnSectsIds.push(id)
    }

    setActiveQId(id) {
        this.tests[this.activeChapterId].activeQId = id
    }

    setShowStart(val) {
        this.tests[this.activeChapterId].showStart = val
    }

    setShowTest(val) {
        this.tests[this.activeChapterId].showTest = val
    }

    setShowFinal(val) {
        this.tests[this.activeChapterId].showFinal = val
    }

    setShowEndTestBtn(val) {
        this.tests[this.activeChapterId].showEndTestBtn = val
    }

    setUserAnswers(qId, aId) {
        this.tests[this.activeChapterId].userAnswers[qId] = aId
    }

    setTreeRightAnswCount() {
        this.tests[this.activeChapterId].treeRightAnswCount =
            this.rightAnswersCount
    }

    setIsLastSlide(val) {
        this.tests[this.activeChapterId].isLastSlide = val
    }

    setUserPassedTest(val) {
        this.tests[this.activeChapterId].userPassedTest = val
    }

    setShowTreeInit(val) {
        this.tests[this.activeChapterId].showTreeInit = val
    }

    setShowTreeStart(val) {
        this.tests[this.activeChapterId].showTreeStart = val
    }

    setShowTreeWait(val) {
        this.tests[this.activeChapterId].showTreeWait = val
    }

    setShowTreeEnd(val) {
        this.tests[this.activeChapterId].showTreeEnd = val
    }

    setActiveChapterId(val) {
        this.activeChapterId = val
    }
}

export default new CourseTest()
