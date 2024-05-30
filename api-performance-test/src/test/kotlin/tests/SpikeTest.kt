package tests

import io.gatling.javaapi.core.CoreDsl.*

class SpikeTest : BaseSimulation() {

    private val frames = listOf(10, 9, 1, 5, 5, 7, 2, 10, 10, 10, 9, 0, 8, 2, 9, 1, 10)

    private val postBowlingScoreScenario = scenario("PostBowlingScore").exec(postBowlingScore(frames))
    private val postBowlingScoreSpikeScenario = scenario("PostBowlingScoreSpike").exec(postBowlingScore(frames))

    init {
        setUp(
            postBowlingScoreScenario.injectOpen(rampUsers(1000).during(60)),
            postBowlingScoreSpikeScenario.injectOpen(nothingFor(20), rampUsers(5000).during(10)),
        ).protocols(httpProtocol)
    }
}