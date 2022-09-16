import { makeAutoObservable } from "mobx"
import { coursePagesData, courseTestsData } from "../data"
import { sectColors } from "../data/coursePagesData/general"

// TODO создать нормальные данные для отрисовки секций

class CourseTest {
    activeCourseId = 1

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

    get learnSectsData() {
        const courseData = coursePagesData[this.activeCourseId]
        const sectsData = this.learnSectsIds.map((id) => {

            const { sectTitle } = courseData[id]
            const sectLink = `/course${this.activeCourseId}/topic${id}/point1`
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
        return courseTestsData.testsQsData[this.activeCourseId]
    }

    get showStart() {
        return this.tests[this.activeCourseId].showStart
    }

    get showTest() {
        return this.tests[this.activeCourseId].showTest
    }

    get showFinal() {
        return this.tests[this.activeCourseId].showFinal
    }

    get showTreeInit() {
        return this.tests[this.activeCourseId].showTreeInit
    }

    get showTreeStart() {
        return this.tests[this.activeCourseId].showTreeStart
    }

    get showTreeWait() {
        return this.tests[this.activeCourseId].showTreeWait
    }

    get showTreeEnd() {
        return this.tests[this.activeCourseId].showTreeEnd
    }

    get showEndTestBtn() {
        return this.tests[this.activeCourseId].showEndTestBtn
    }

    get userPassedTest() {
        return this.tests[this.activeCourseId].userPassedTest
    }

    get treeRightAnswCount() {
        return this.tests[this.activeCourseId].treeRightAnswCount
    }

    // TODO ! проверять есть ли дальше курс, и только тогда покащывать в тесте кнопку прожолжжить обучение?
    // eslint-disable-next-line class-methods-use-this
    get nextCourseLink() {
        return `/course${+this.activeCourseId + 1}`
    }

    get learnSectsIds() {
        const wrongSectIds = []

        Object.entries(this.userAnswers).forEach(([qId, answId]) => {
            // eslint-disable-next-line eqeqeq
            const qData = this.testQsData.find(({ id }) => id == qId)

            const { correct, wrongAnswerSectId } = qData

            if (qData) {
                if (
                    // eslint-disable-next-line eqeqeq
                    answId != correct &&
                    !wrongSectIds.includes(wrongAnswerSectId)
                ) {
                    wrongSectIds.push(wrongAnswerSectId)
                }
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
        return this.tests[this.activeCourseId].userAnswers
    }

    get activeQId() {
        return this.tests[this.activeCourseId].activeQId
    }

    get isLastSlide() {
        return this.tests[this.activeCourseId].isLastSlide
    }

    get nextBtnDisabled() {
        if (!this.tests[this.activeCourseId].userAnswers[this.activeQId]) {
            return true
        }
        return false
    }

    get rightAnswersCount() {
        let count = 0

        Object.entries(this.userAnswers).forEach(([qId, answId]) => {
            // eslint-disable-next-line eqeqeq
            const qData = this.testQsData.find(({ id }) => id == qId)

            const { correct } = qData

            if (qData) {
                // eslint-disable-next-line eqeqeq
                if (answId == correct) {
                    count += 1
                }
            }
        })
        return count
    }

    resetProgress() {
        this.tests[this.activeCourseId] = {
            learnSectsIds: [],
            userAnswers: {},
            activeQId: courseTestsData.testsQsData[this.activeCourseId][0].id,
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

    setLearnSectId(id) {
        this.tests[this.activeCourseId].learnSectsIds.push(id)
    }

    setActiveQId(id) {
        this.tests[this.activeCourseId].activeQId = id
    }

    setShowStart(val) {
        this.tests[this.activeCourseId].showStart = val
    }

    setShowTest(val) {
        this.tests[this.activeCourseId].showTest = val
    }

    setShowFinal(val) {
        this.tests[this.activeCourseId].showFinal = val
    }

    setShowEndTestBtn(val) {
        this.tests[this.activeCourseId].showEndTestBtn = val
    }

    setUserAnswers(qId, aId) {
        this.tests[this.activeCourseId].userAnswers[qId] = aId
    }

    setTreeRightAnswCount() {
        this.tests[this.activeCourseId].treeRightAnswCount =
            this.rightAnswersCount
    }

    setIsLastSlide(val) {
        this.tests[this.activeCourseId].isLastSlide = val
    }

    setUserPassedTest(val) {
        this.tests[this.activeCourseId].userPassedTest = val
    }

    setShowTreeInit(val) {
        this.tests[this.activeCourseId].showTreeInit = val
    }

    setShowTreeStart(val) {
        this.tests[this.activeCourseId].showTreeStart = val
    }

    setShowTreeWait(val) {
        this.tests[this.activeCourseId].showTreeWait = val
    }

    setShowTreeEnd(val) {
        this.tests[this.activeCourseId].showTreeEnd = val
    }

    setActiveCourseId(val) {
        this.activeCourseId = val
    }
}

export default new CourseTest()
