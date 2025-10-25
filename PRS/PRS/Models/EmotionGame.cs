namespace PRS.Models
{
    public class EmotionGame
    {
        public int NumberOfEmotionsToRecognize { get; set; }
        public List<EmotionType> EmotionsToRecognize { get; set; } = new();
    }
}
