using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OrbitForce : MonoBehaviour {
    public float oForce = 1.0f;
	// Use this for initialization
	void Start () {
        GetComponent<Rigidbody>().AddForce(oForce, oForce, oForce);
    }
	
	// Update is called once per frame
	void Update () {
        

    }
}
