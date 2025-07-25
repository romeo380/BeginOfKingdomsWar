using UnityEngine;

public class CityManager : MonoBehaviour {
    public int wood = 100;
    public int stone = 50;

    void Start() {
        Debug.Log("City Initialized with Wood: " + wood);
    }

    public void BuildFarm() {
        wood -= 10;
        Debug.Log("Farm built! Wood remaining: " + wood);
    }
}
