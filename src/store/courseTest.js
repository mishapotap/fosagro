import { makeAutoObservable } from "mobx"
import { courseStepButtonData1, courseTestsData } from "../data"

// TODO создать нормальные данные для отрисовки секций

// TODO как-то получать актуальное значение
const activeCourseId = 1

class CourseTest {
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
        // для проверки, позже записать данные как в 1 и других
        2: {
            learnSectsIds: [],
            userAnswers: { 1: 2, 2: 1, 3: 1, 4: 1, 5: 1 },
            activeQId: courseTestsData.testsQsData[2][0].id,
            showStart: false,
            showFinal: true,
            showTest: false,
            showEndTestBtn: false,
            isLastSlide: false,
            treeRightAnswCount: 1,
            userPassedTest: true,
            showTreeInit: false,
            showTreeStart: false,
            showTreeWait: false,
            showTreeEnd: true,
        },
        3: {
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
        4: {
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
        5: {
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
        6: {
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
    }

    constructor() {
        makeAutoObservable(this)
    }

    // eslint-disable-next-line class-methods-use-this
    get learnSectsData() {
        // ! временно, записывать нормальные данные для отрисовки секций
        return courseStepButtonData1
    }

    // eslint-disable-next-line class-methods-use-this
    get testQsData() {
        return courseTestsData.testsQsData[activeCourseId]
    }

    get showStart() {
        return this.tests[activeCourseId].showStart
    }

    get showTest() {
        return this.tests[activeCourseId].showTest
    }

    get showFinal() {
        return this.tests[activeCourseId].showFinal
    }

    get showTreeInit() {
        return this.tests[activeCourseId].showTreeInit
    }

    get showTreeStart() {
        return this.tests[activeCourseId].showTreeStart
    }

    get showTreeWait() {
        return this.tests[activeCourseId].showTreeWait
    }

    get showTreeEnd() {
        return this.tests[activeCourseId].showTreeEnd
    }

    get showEndTestBtn() {
        return this.tests[activeCourseId].showEndTestBtn
    }

    get userPassedTest() {
        return this.tests[activeCourseId].userPassedTest
    }

    get treeRightAnswCount() {
        return this.tests[activeCourseId].treeRightAnswCount
    }

    // eslint-disable-next-line class-methods-use-this
    get nextCourseLink() {
        return `/course/${activeCourseId + 1}`
    }

    get learnSectsIds() {
        return this.tests[activeCourseId].learnSectsIds
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
        return this.tests[activeCourseId].userAnswers
    }

    get activeQId() {
        return this.tests[activeCourseId].activeQId
    }

    get isLastSlide() {
        return this.tests[activeCourseId].isLastSlide
    }

    get nextBtnDisabled() {
        if (!this.tests[activeCourseId].userAnswers[this.activeQId]) {
            return true
        }
        return false
    }

    get rightAnswersCount() {
        let count = 0

        Object.entries(this.userAnswers).forEach(([qId, answId]) => {
            // eslint-disable-next-line eqeqeq
            const qData = this.testQsData.find(({ id }) => id == qId)

            const { wrongAnswerSectId, correct } = qData

            if (qData) {
                // eslint-disable-next-line eqeqeq
                if (answId == correct) {
                    count += 1
                } else {
                    this.setLearnSectId(wrongAnswerSectId)
                }
            }
        })
        return count
    }

    setLearnSectId(id) {
        this.tests[activeCourseId].learnSectsIds.push(id)
    }

    setActiveQId(id) {
        this.tests[activeCourseId].activeQId = id
    }

    setShowStart(val) {
        this.tests[activeCourseId].showStart = val
    }

    setShowTest(val) {
        this.tests[activeCourseId].showTest = val
    }

    setShowFinal(val) {
        this.tests[activeCourseId].showFinal = val
    }

    setShowEndTestBtn(val) {
        this.tests[activeCourseId].showEndTestBtn = val
    }

    setUserAnswers(qId, aId) {
        this.tests[activeCourseId].userAnswers[qId] = aId
    }

    setTreeRightAnswCount() {
        this.tests[activeCourseId].treeRightAnswCount = this.rightAnswersCount
    }

    setIsLastSlide(val) {
        this.tests[activeCourseId].isLastSlide = val
    }

    setUserPassedTest(val) {
        this.tests[activeCourseId].userPassedTest = val
    }

    setShowTreeInit(val) {
        this.tests[activeCourseId].showTreeInit = val
    }

    setShowTreeStart(val) {
        this.tests[activeCourseId].showTreeStart = val
    }

    setShowTreeWait(val) {
        this.tests[activeCourseId].showTreeWait = val
    }

    setShowTreeEnd(val) {
        this.tests[activeCourseId].showTreeEnd = val
    }
}

export default new CourseTest()
